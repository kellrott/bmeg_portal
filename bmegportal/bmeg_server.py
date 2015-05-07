#!/usr/bin/env python

"""bmeg_server.py:
March 2014	chrisw

A tornado server for submitting Groovy-flavored Gremlin query scripts to Rexster.

"""
#import BmegGremlinQueryHandler
#import BmegSigDbQueryHandler

import os
import sys
import tornado.ioloop
import tornado.web
import tornado.autoreload

def get_abspath(path):
    return os.path.abspath(os.path.join(os.path.dirname(__file__), path))

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render(get_abspath("../static/index.html"))

# map urls to handlers
application = tornado.web.Application([
	#(r"/", MainHandler),
    (r"/()", tornado.web.StaticFileHandler, {"path": get_abspath("../static/"), "default_filename": "index.html"}),
    (r"/(index.html)", tornado.web.StaticFileHandler, {"path": get_abspath("../static/")}),
	(r"/static/(.*)", tornado.web.StaticFileHandler, {"path": get_abspath("../static/")}),
	(r"/images/(.*)", tornado.web.StaticFileHandler, {"path": get_abspath("../static/images/")}),
	#(r"/query", BmegGremlinQueryHandler.BmegGremlinQueryHandler),
	#(r"/sigQuery", BmegSigDbQueryHandler.BmegSigDbQueryHandler)
])

# start server
if __name__ == "__main__":
    application.listen(sys.argv[1])
    ioloop = tornado.ioloop.IOLoop.instance()
    tornado.autoreload.start(ioloop)
    ioloop.start()
