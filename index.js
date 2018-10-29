const SlackAttachments = require('./class/index')

/**
 * Generate Attachments
 *
 * @param {string} text message text
 * @param {string} [color='info'] attachment color
 * @param {array} [fields=[]] Lists of fields
 * @param {string} [fallback] fallback message
 * @param {string} [footer] footer content
 */
const generateAttachments = (text, color = 'info', fields = [], fallback = '', footer = '') => {
  const c = new SlackAttachments()
  c.addAttachment(text, color, fields, fallback, footer)
  return c.getAttachment()
}

module.exports = {
  SlackAttachments,
  generateAttachments
}
