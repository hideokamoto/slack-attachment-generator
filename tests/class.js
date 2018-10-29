const assert = require('power-assert')
// target
const SlackAttachments = require('../class/index')

describe('SlackAttachments', () => {
  describe('set attachments', () => {
    const Entity = new SlackAttachments()
    it('should return empty array when nothing to do', () => {
      Entity.setMessage('Hello')
      Entity.setFallBackMessage('fallback')
      Entity.setColor('good')
      Entity.setFooter('footer')
      Entity.addAttachmentFields('Title', 'value')
      Entity.addAttachmentFields('Title2', 'content', true)
      Entity.pushAttachment()
      assert.deepEqual(Entity.getAttachment(), [{
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
      }])
    })
  })
  describe('Create Attachments', () => {
    it('should return empty array when nothing to do', () => {
      const Entity = new SlackAttachments()
      assert.deepEqual(Entity.getAttachment(), [])
    })
    it('should set simple attachments', () => {
      const Entity = new SlackAttachments()
      Entity.addAttachment(
        'Title',
        'danger',
        [
          {
            title: '===',
            value: ' '
          }
        ]
      )
      assert.deepEqual(Entity.getAttachment(), [{
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
      }])
    })
    it('should set multipile attachments', () => {
      const Entity = new SlackAttachments()
      Entity.addAttachment(
        'Title',
        'danger',
        [
          {
            title: '===',
            value: ' '
          }
        ]
      )
      Entity.addAttachment(
        'Title2',
        'good',
        [
          {
            title: '===',
            value: ' '
          }, {
            title: 'Content',
            value: 'Hello',
            short: 'true'
          }
        ],
        'Fallback message',
        'footer content'
      )
      assert.deepEqual(Entity.getAttachment(), [{
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
      }, {
        color: 'good',
        text: 'Title2',
        fallback: 'Fallback message',
        footer: 'footer content',
        fields: [
          {
            title: '===',
            value: ' '
          }, {
            title: 'Content',
            value: 'Hello',
            short: 'true'
          }
        ]
      }])
    })
  })
})
