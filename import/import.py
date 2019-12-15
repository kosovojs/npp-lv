import toolforge, sys
from datetime import date, datetime, timedelta, timezone
from pytz import timezone
#from customFuncs import basic_petscan
from natsort import natsorted
import pymysql#, pywikibot

utc_timezone = timezone("UTC")
lva_timezone = timezone("Europe/Riga")

conn = toolforge.connect_tools('s53917__npp_p')
conn1 = toolforge.connect('lvwiki_p','analytics')

def utc_to_local(utc_dt):
	return utc_timezone.localize(utc_dt).astimezone(lva_timezone)
#

def local_to_utc(utc):
	return lva_timezone.localize(utc).astimezone(utc_timezone)
#
def encode_if_necessary(b):
	if type(b) is bytes:
		return b.decode('utf8')
	return b

def run_query(query,connection):
	#query = query.encode('utf-8')
	#print(query)
	try:
		cursor = connection.cursor()
		cursor.execute(query)
		rows = cursor.fetchall()
	except KeyboardInterrupt:
		sys.exit()
	
	return rows
#




max_time = encode_if_necessary(run_query("select max(date) from main",conn)[0][0])
#dtobject = datetime.strptime(max_time, '%Y%m%d%H%M%S')
date_string = "{0:%Y%m%d%H%M%S}".format(local_to_utc(max_time))

print('NPP import: maximal timestamp curr db: '+str(max_time))
print('NPP import: maximal timestamp curr db -> utc: '+str(date_string))
#print('maxtime conv: '+str(local_to_utc(max_time)))
#print('dtobject: '+dtobject)
#print('date_string: '+str(date_string))

#os.chdir(r'projects/lv')

#file = eval(open("quarry-27666-untitled-run268322.json", "r", encoding='utf-8').read())['rows']


file = run_query('select actor_name, rev_timestamp, orig.page_title from revision join page orig on orig.page_id=rev_page and orig.page_is_redirect=0 and orig.page_namespace=0 join actor on actor_id=rev_actor where rev_timestamp>"{}" and rev_parent_id=0'.format(date_string),conn1)


other_new_sql = '''select actor_name, rc_timestamp, rc_title
from change_tag ch
join change_tag_def def on def.ctd_id=ch.ct_tag_id
join recentchanges rc on rc.rc_id = ch.ct_rc_id 
join actor on actor_id=rc_actor
where ch.ct_tag_id=3#mw-removed-redirect
#where rc_user=347
and rc_title in (select page_title from page where page.page_title=rc_title and page_namespace=0 and page_is_redirect=0)
and rc_timestamp>{}
order by rc_timestamp desc
limit 500'''

file = natsorted(file, key=lambda x: encode_if_necessary(x[1]))
#http://pymysql.readthedocs.io/en/latest/user/examples.html

other_new_articles = run_query(other_new_sql.format(date_string),conn1)
other_new_articles = natsorted(other_new_articles, key=lambda x: encode_if_necessary(x[1]))


article_count = run_query('SELECT count(*) FROM main WHERE (comment is NULL and reviewed is NULL)',conn)
article_count = encode_if_necessary(article_count[0][0])


def run_upd(query):
	#query = query.encode('utf-8')
	#print(query)
	try:
		#https://askubuntu.com/questions/1026770/can-not-insert-data-mysql-using-python-with-pymysql
		cursor = conn.cursor()
		cursor.execute(query)
		conn2.commit()
	except KeyboardInterrupt:
		sys.exit()
#
cursor = conn.cursor()

localtime2 = utc_to_local(datetime.utcnow())
dateforq12 = "{0:%Y%m%d%H%M%S}".format(localtime2)

sql2 = 'INSERT INTO `stats` (`timest`, `articles`) VALUES (%s, %s)'
cursor.execute(sql2, (dateforq12,article_count))

print('NPP import: found: '+str(len(file)))
print('NPP import (new articles): found: '+str(len(other_new_articles)))

for row in file:
	row = [encode_if_necessary(f) for f in row]
	user,date,article = row
	
	#if article in ('Krasnoslobodska','Krasnoslobodska_(Mordvija)'): continue
	
	parsed_date = datetime.strptime(date,'%Y%m%d%H%M%S')
	localtime = utc_to_local(parsed_date)
	dateforq1 = "{0:%Y%m%d%H%M%S}".format(localtime)
	#print(dateforq1)
	sql = 'INSERT INTO `main` (`title`, `date`, `user`) VALUES (%s, %s, %s)'
	
	#cursor.execute(sql, ('webmaster@python.org', 'very-secret'))
	cursor.execute(sql, (article.replace('_',' '),dateforq1,user.replace('_',' ')))
#
for row in other_new_articles:
	row = [encode_if_necessary(f) for f in row]
	user,date,article = row
	
	#if article in ('Krasnoslobodska','Krasnoslobodska_(Mordvija)'): continue
	
	parsed_date = datetime.strptime(date,'%Y%m%d%H%M%S')
	localtime = utc_to_local(parsed_date)
	dateforq1 = "{0:%Y%m%d%H%M%S}".format(localtime)
	#print(dateforq1)
	sql = 'INSERT INTO `main` (`title`, `date`, `user`, `addition_type`) VALUES (%s, %s, %s, "1")'
	
	#cursor.execute(sql, ('webmaster@python.org', 'very-secret'))
	cursor.execute(sql, (article.replace('_',' '),dateforq1,user.replace('_',' ')))
#
#
conn.commit()
conn.close()