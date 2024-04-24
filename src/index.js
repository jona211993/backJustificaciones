import app from './app.js'

app.listen(app.get('port'))

console.log("server en el port:",app.get('port'))

