#!/usr/bin/python3
"""Display body using -X like in curl: GET request to the body.
Take an argument"""
import sys
import urllib.request as urllib

if __name__ == "__main__":

    """Get url first from arguments list"""
    myurl = sys.argv[1]

    request = urllib.Request(myurl)

    """Open the response encoded"""
    with urllib.urlopen(request) as response:
        print(dict(response.headers).get("X-Request-Id"))
