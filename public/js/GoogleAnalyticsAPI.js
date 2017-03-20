window.addEventListener("load", function () {
    // Youtube
    gapi.analytics.ready(function () {
        gapi.analytics.auth.authorize({
            'serverAuth': {
                'access_token': access_token
            }
        });

        var linedataChart1 = new gapi.analytics.googleCharts.DataChart({
            query: {
                'ids': 'ga:122544209', // <-- Replace with the ids value for your view.
                'start-date': '30daysAgo',
                'end-date': 'yesterday',
                'metrics': 'ga:sessions',
                'dimensions': 'ga:date'
            },
            chart: {
                'container': 'youtube-linechart-1-container',
                'type': 'LINE',
                'options': {
                    'width': 'vw'
                }
            }
        });
        linedataChart1.execute();

        var linedataChart2 = new gapi.analytics.googleCharts.DataChart({
            query: {
                'ids': 'ga:122544209', // <-- Replace with the ids value for your view.
                'start-date': '30daysAgo',
                'end-date': 'yesterday',
                'metrics': 'ga:users',
                'dimensions': 'ga:date'
            },
            chart: {
                'container': 'youtube-linechart-2-container',
                'type': 'LINE',
                'options': {
                    'width': '80vw'
                }
            }
        });
        linedataChart2.execute();
    });

    // Hemsida
    gapi.analytics.ready(function() {

        gapi.analytics.auth.authorize({
            'serverAuth': {
                'access_token': access_token
            }
        });

        var linedataChart1 = new gapi.analytics.googleCharts.DataChart({
            query: {
                'ids': 'ga:135456236', // <-- Replace with the ids value for your view.
                'start-date': '30daysAgo',
                'end-date': 'yesterday',
                'metrics': 'ga:sessions',
                'dimensions': 'ga:date'
            },
            chart: {
                'container': 'hemsida-linechart-1-container',
                'type': 'LINE',
                'options': {
                    'width': 'vw'
                }
            }
        });
        linedataChart1.execute();

        var linedataChart2 = new gapi.analytics.googleCharts.DataChart({
            query: {
                'ids': 'ga:135456236', // <-- Replace with the ids value for your view.
                'start-date': '30daysAgo',
                'end-date': 'yesterday',
                'metrics': 'ga:users',
                'dimensions': 'ga:date'
            },
            chart: {
                'container': 'hemsida-linechart-2-container',
                'type': 'LINE',
                'options': {
                    'width': '80vw'
                }
            }
        });
        linedataChart2.execute();
    });
});