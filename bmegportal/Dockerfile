FROM    centos:centos6


RUN     yum install -y httpd mod_wsgi
RUN     rm /etc/httpd/conf/httpd.conf
ADD     httpd.conf /etc/httpd/conf/
