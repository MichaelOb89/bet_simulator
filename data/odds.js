const odd = {
    "get": "odds",
    "parameters": {
        "season": "2022",
        "fixture": "868124",
        "bookmaker": "8",
        "league": "39"
    },
    "errors": [],
    "results": 1,
    "paging": {
        "current": 1,
        "total": 1
    },
    "response": [
        {
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2022
            },
            "fixture": {
                "id": 868124,
                "timezone": "UTC",
                "date": "2022-12-30T19:45:00+00:00",
                "timestamp": 1672429500
            },
            "update": "2022-12-30T00:00:37+00:00",
            "bookmakers": [
                {
                    "id": 8,
                    "name": "Bet365",
                    "bets": [
                        {
                            "id": 1,
                            "name": "Match Winner",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.95"
                                },
                                {
                                    "value": "Draw",
                                    "odd": "3.60"
                                },
                                {
                                    "value": "Away",
                                    "odd": "3.75"
                                }
                            ]
                        },
                        {
                            "id": 2,
                            "name": "Home/Away",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.44"
                                },
                                {
                                    "value": "Away",
                                    "odd": "2.63"
                                }
                            ]
                        },
                        {
                            "id": 3,
                            "name": "Second Half Winner",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "2.25"
                                },
                                {
                                    "value": "Draw",
                                    "odd": "2.50"
                                },
                                {
                                    "value": "Away",
                                    "odd": "3.75"
                                }
                            ]
                        },
                            ]
                        }
                    ]
                }
    ]
}

console.log(odd.response[0].bookmakers[0].bets[0])
