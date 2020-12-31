import requests

url = 'https://restapi.amap.com/v3/place/text?key=634acb1b7b3873de8e510b0d3d165a69&keywords=北京金茂万丽酒店&types=酒店&city=北京&children=0&offset=20&page=1&extensions=all'
r = requests.get(url)
print(r.text)