import re
import json

s = "[[San Diego County, California|San Diego]]"
i = "{{efn|"
m = ".*\[\[(\w.+), (\w.+)\|(\w.+)\]\]"
m1 = "[[(\w.+), (\w.+)\|(\w.+), (\w.+)]]"
counties = {}
with open("counties.md", "r") as f:
    for line in f:
        if line.find("[[") < 0 or line.find("<!--") >= 0:
            continue
        g = re.match(m, line)
        if g != None:
            county = g.groups()[0]
            state = g.groups()[1]        
        jump = line.find("{{efn")        
        if jump  >= 0:
            l = line[jump:]
            j = l.find("[[")
            k = l.find("]]")
            l = l[j:k + 2].strip()
            print("-")
            print(line)
            print(l)
            g1 = re.match(m1, l)
            if g1:
                print(g1.groups())
                county = g1.groups()[2]
                state = g1.groups()[3]
        if g != None or g1 != None:
            if state not in counties:
                counties[state] = []
            counties[state].append(county)
    with open("counties.json", "w") as fo:
        json.dump(counties, fo, indent = 4, sort_keys=True)
