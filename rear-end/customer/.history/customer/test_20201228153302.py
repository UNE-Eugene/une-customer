import requests

url = 'https://restapi.amap.com/v3/place/text?keywords=北京大学&city=beijing&output=xml&offset=20&page=1&key=634acb1b7b3873de8e510b0d3d165a69&extensions=all'
r = requests.get(url)
print(r.text)