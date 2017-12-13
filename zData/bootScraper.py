from io import BytesIO
import gzip
from bs4 import BeautifulSoup as soup
import re
import sqlite3
import urllib.request

def runThis():
    # open gzipped url and prepare it for beautiful soup
    request = urllib.request.Request('https://projects.fivethirtyeight.com/2018-nba-predictions/')
    request.add_header('Accept-encoding', 'gzip')
    response = urllib.request.urlopen(request)
    if response.info().get('Content-Encoding') == 'gzip':
        buf = BytesIO(response.read())
        f = gzip.GzipFile(fileobj=buf)
        data = f.read()
        pageSoup = soup(data, "html.parser")
        # soup that is ripped to be processed
        allTDs = pageSoup.findAll("td", {"class": "num div proj-rec break"})
        teamNames = pageSoup.findAll("a", {"target": "_blank"})
        # list of team names
        n = re.findall('[>]([\d\w][^<]+)[<]', str(teamNames))
        # list of records
        m = re.findall('[>]([\d]{1,2})-([\d]{1,2})[<]', str(allTDs))
        # swap team names for city abvs
        for i in range(0, len(n)):
            if n[i] == '76ers':
                n[i] = 'PHI'
            elif n[i] == 'Bucks':
                n[i] = 'MIL'
            elif n[i] == 'Bulls':
                n[i] = 'CHI'
            elif n[i] == 'Cavaliers':
                n[i] = 'CLE'
            elif n[i] == 'Celtics':
                n[i] = 'BOS'
            elif n[i] == 'Clippers':
                n[i] = 'LAC'
            elif n[i] == 'Grizzlies':
                n[i] = 'MEM'
            elif n[i] == 'Hawks':
                n[i] = 'ATL'
            elif n[i] == 'Heat':
                n[i] = 'MIA'
            elif n[i] == 'Hornets':
                n[i] = 'CHA'
            elif n[i] == 'Jazz':
                n[i] = 'UTA'
            elif n[i] == 'Kings':
                n[i] = 'SAC'
            elif n[i] == 'Knicks':
                n[i] = 'NYK'
            elif n[i] == 'Lakers':
                n[i] = 'LAL'
            elif n[i] == 'Magic':
                n[i] = 'ORL'
            elif n[i] == 'Mavericks':
                n[i] = 'DAL'
            elif n[i] == 'Nets':
                n[i] = 'BKN'
            elif n[i] == 'Nuggets':
                n[i] = 'DEN'
            elif n[i] == 'Pacers':
                n[i] = 'IND'
            elif n[i] == 'Pelicans':
                n[i] = 'NOP'
            elif n[i] == 'Pistons':
                n[i] = 'DET'
            elif n[i] == 'Raptors':
                n[i] = 'TOR'
            elif n[i] == 'Rockets':
                n[i] = 'HOU'
            elif n[i] == 'Spurs':
                n[i] = 'SAS'
            elif n[i] == 'Suns':
                n[i] = 'PHX'
            elif n[i] == 'Thunder':
                n[i] = 'OKC'
            elif n[i] == 'Timberwolves':
                n[i] = 'MIN'
            elif n[i] == 'Trail Blazers':
                n[i] = 'POR'
            elif n[i] == 'Warriors':
                n[i] = 'GSW'
            elif n[i] == 'Wizards':
                n[i] = 'WAS'
        # populates arrays with wins and loses
        wins = []
        loses = []
        for item in m:
            wins.append(int(item[0]))
            loses.append(int(item[1]))
        # aggregates arrays with names, wins, and loses
        bigArray = []
        for a, b, c in zip(n, wins, loses):
            bigArray.append([a, b, c])

        # orders the aggregate array in alphabetical order by city abv
        def getKey(index):
            return index[0]

        sortedArray = (sorted(bigArray, key=getKey))
        
        # assign ID no.s to the first element of each array to replace their city abv
        for i in range(0, len(sortedArray)):
            sortedArray[i][0] = int(i)

        # establish connection to the db
        conn = sqlite3.connect('nbaBet.db')
        c = conn.cursor()
        # function to create the db table if it doesn't exist (although it does)
        def createTable():
            c.execute('CREATE TABLE IF NOT EXISTS records(tid INT, wins INT, loses INT)')
        # func to populate db table with the sorted array then close the db connection
        def dataEntry():
            for i in range(0, len(sortedArray)):
                tid = sortedArray[i][0]
                wins = sortedArray[i][1]
                loses = sortedArray[i][2]
                c.execute("INSERT INTO records (tid, wins, loses) VALUES (?, ?, ?)",
                          (tid, wins, loses))
                conn.commit()
            c.close()
            conn.close()

        createTable()
        dataEntry()
runThis()