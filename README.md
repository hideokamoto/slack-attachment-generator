# Slack attachment generator

Simply attachment generator for slack.

## Getting started

```
$ npm i -S slack-attachment-generator
```

## Usage

### As function

```
const {
  generateAttachments
} = require('slack-attachment-generator')
const attachments = generateAttachments(
  'Title',
  'danger',
  [
    {
      title: '===',
      value: ' '
    }
  ]
)
```

It will be returns following object.

```
[{
  color: 'danger',
  text: 'Title',
  fallback: '',
  footer: '',
  fields: [
    {
      title: '===',
      value: ' '
    }
  ]
}]
```

### As Class (single method)

```
const Attachments = new SlackAttachments()
Attachments.addAttachment(
  'Title',
  'danger',
  [
    {
      title: '===',
      value: ' '
    }
  ]
)
const attachments = Attachments.getAttachment()

[{
  color: 'danger',
  text: 'Title',
  fallback: '',
  footer: '',
  fields: [
    {
      title: '===',
      value: ' '
    }
  ]
}]
```

### As Class (as class)

```
const Attachments = new SlackAttachments()
Attachments.setMessage('Hello')
Attachments.setFallBackMessage('fallback')
Attachments.setColor('good')
Attachments.setFooter('footer')
Attachments.addAttachmentFields('Title', 'value')
Attachments.addAttachmentFields('Title2', 'content', true)
Attachments.pushAttachment()
Attachments.getAttachment()

[{
  color: 'good',
  text: 'Hello',
  fallback: 'fallback',
  footer: 'footer',
  fields: [
    {
      title: 'Title',
      value: 'value'
    }, {
      short: 'true',
      title: 'Title2',
      value: 'content'
    }
  ]
}]
```