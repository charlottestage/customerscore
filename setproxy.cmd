@echo off
echo Setting http_proxy, https_proxy and no_proxy
set http_proxy=http://virproxy.topdanmark.local:8080
set https_proxy=http://virproxy.topdanmark.local:8080
set no_proxy=artifactory.topdanmark.local,github.topdanmark.local