var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var ms = {
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "You can add a button alongside text in your message. "
			},
			"accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Button",
					"emoji": true
				},
				"value": "playrepro:asdadsadsadsads"
			}
		}
	]
};


var e =  {
  token: 'melafelicidadeningles',
  team_id: 'sddsadas',
  team_domain: 'netlabsuy',
  channel_id: 'CRZAPKP6X',
  channel_name: 'planet_music',
  user_id: 'jajaj ',
  user_name: 'Thekraquen',
  command: '/cmd',
  text: '',
  response_url: 'https://hooks.slack.com/commands/TQ1J8QKLZS/901842012448/kkGdd1hIzCPJuIcevAJXSkjn',
  trigger_id: '903700782247.817620835713.101e216bdb8c938989189eeb40a6b659',
  payload:'{"type":"block_actions","team":{"id":"TQ1J8QKLZS","domain":"netlabsuy" },"user":{"id":"UQ9FVF6E4","username":"TheKraquen","name":"Benito kmlo","team_id":"TQ1J8QKLZS" },"api_app_id":"AQBC88AS3","token":"melafelicidadeningles","container":{"type":"message","message_ts":"1578682380.000400","channel_id":"CRZAPKP6X","is_ephemeral":true },"trigger_id":"890375476291.817620835713.40c0533ebac203057e63bd92ca9010a6","channel":{"id":"CRZAPKP6X","name":"planet_music" },"response_url":"https:\\/\\/hooks.slack.com\\/actions\\/TQ1J8QKLZS\\/901386698820\\/LumcDZidLGvYFbDILkkrqXR0","actions":[ {"action_id":"11CK","block_id":"nFpbB","text":{"type":"plain_text","text":"Button","emoji":true },"value":"playrepro:spotify:playlist:1HnWBdfNJdaaseWvDxXCRW","type":"button","action_ts":"1578682432.951370"}]}' 
};


app.get('/', function (req, res) {
	res.send(ms);
});

app.get('/', function (req, res) {
	res.send(ms);
});

app.get('/', function (req, res) {
	res.send(ms);
});

app.get('/', function (req, res) {
	res.send(ms);
});

app.get('/', function (req, res) {
	res.send(ms);
});

app.get('/', function (req, res) {
	res.send(ms);
});

app.get('/', function (req, res) {
	res.send(ms);
});

app.get('/', function (req, res) {
	res.send(ms);
});

app.get('/', function (req, res) {
	res.send(ms);
});

app.get('/', function (req, res) {
	res.send(ms);
});

app.get('/', function (req, res) {
	res.send(ms);
});


app.get('/', function (req, res) {
  res.send(ms);
});

app.post('/', function (req, res) {
  console.log(req.body);
  res.send(ms);
});

app.get('/pagecount', function (req, res) {
  res.send('Hellonaa mentira World!');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
