from multiprocessing import Pool
from requests import get,post

URL = 'http://localhost:3000'

def send_request(val):
    while True:
        res = post(f'{URL}')
        data = res.json()
        print('Sending request')
        print(data)

if __name__ == '__main__':
    with Pool(50) as p:
        p.map(send_request, range(50))