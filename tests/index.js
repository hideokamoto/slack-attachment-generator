const assert = require('power-assert')
// target
const {
  generateAttachments,
  SlackAttachments
} = require('../index')

describe('root', () => {
  describe('SlackAttachments', () => {
    it('should be initilzed the class', () => {
      const Entity = new SlackAttachments()
      assert.deepEqual(Entity.getAttachment(), [])
    })
  })
  describe('generateAttachments()', () => {
    it('should generate attachments object', () => {
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
      assert.deepEqual(attachments, [{
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
  })
})
