# Webtask.io Slack Translator

This Slack command script is deployable to Webtask.io. Uses Google Translate for translation

## Getting Started

First you will need to have accounts for [Webtask.io](https://webtask.io/), [Google Translate](https://cloud.google.com/translate/docs/getting-started), and a [Slack Domain](https://slack.com/create)

## Prerequisites
1. Install [Webtask CLI](https://github.com/auth0/wt-cli)
1. [Google API Key](https://console.cloud.google.com/apis/credentials)
2. Register the [Slack App](https://api.slack.com/apps)
3. Add the Slack Token to `.env` see `.env.sample` for available `KEY=VALUES`

## Create your Webtask for first time
```
wt create dist/translate.js \
--name slack-translate \
--secret-file .env \
--dependency axios@0.16.2
```

## Deployment

`npm run deploy`

## Usage

Once everything is set up in a public Slack channel, use the tool like so...

```
> /translate Hello World -- es
> Hola Mundo
```

## Tests

`npm test`

## Contributing
1. Create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am 'Add some feature'`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull/merge request to a maintainer :D

## Authors

* **Sean Graham** - *Initial work* - [sgraham785](https://github.com/sgraham785)

## License

[MIT licensed](./LICENSE).