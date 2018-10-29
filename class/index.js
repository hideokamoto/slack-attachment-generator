
class SlackAttachments {
  constructor () {
    this.initializeAttachment()
  }
  initializeAttachment () {
    this.attachments = []
    this.refreshAttachment()
  }
  refreshAttachment () {
    this.text = ''
    this.fallback = ''
    this.color = 'info'
    this.footer = ''
    this.fields = []
  }
  pushAttachment () {
    this.attachments.push({
      fallback: this.getFallbackMessage(),
      text: this.getMessage(),
      color: this.getColor(),
      fields: this.getAttachmentFields(),
      footer: this.getFooter()
    })
  }
  addAttachment (text, color = this.color, fields = this.fields, fallback = this.fallback, footer = this.footer) {
    this.setMessage(text)
    this.setColor(color)
    this.fields = fields
    this.setFallBackMessage(fallback)
    this.setFooter(footer)
    this.pushAttachment()
    this.refreshAttachment()
  }
  addAttachmentFields (title, value, short = false) {
    const obj = {
      title,
      value
    }
    if (short) obj.short = 'true'
    this.fields.push(obj)
  }
  setFooter (footer) {
    this.footer = footer
  }
  setMessage (message) {
    this.text = message
    this.setFallBackMessage(message)
  }
  setFallBackMessage (message) {
    this.fallback = message
  }
  setColor (color) {
    this.color = color
  }
  getFooter () {
    return this.footer
  }
  getColor () {
    return this.color
  }
  getMessage () {
    return this.text
  }
  getFallbackMessage () {
    return this.fallback
  }
  getAttachmentFields () {
    return this.fields
  }
  getAttachment () {
    return this.attachments
  }
}
module.exports = SlackAttachments
