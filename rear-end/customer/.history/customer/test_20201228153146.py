import requests

url = 'https://restapi.amap.com/v3/place/text?keywords=北京大学&city=beijing&output=xml&offset=20&page=1&key=4208a890f2082527a201f4f73c221150&extensions=all'
r = requests.get(url)
print(r.text)