# coding: utf-8
import time

import requests
import json
def generate_cookies(name):
    """
    """
    response = requests.post('http://%s/test' % '127.0.0.1:5000', data={'name': name}, timeout=20)
    return response.json()



if __name__ == "__main__":
    n = 1000000
    start_time = time.time()
    for i in range(n):
        data = generate_cookies('haha')
        time.sleep(0.001)
        print(i)
        print(data)
    end_time = time.time()
    print((end_time - start_time) / n)
