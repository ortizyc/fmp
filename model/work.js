const AV = require('../utils/av-weapp-min.js');

class Work extends AV.Object {

  get oUser() {
    return this.get('oUser')
  }
  set oUser(value) {
    return this.set('oUser', value);
  }

  get sCompany() {
    return this.get('sCompany');
  }
  set sCompany(value) {
    return this.set('sCompany', value);
  }

  get sPost() {
    return this.get('sPost');
  }
  set sPost(value) {
    return this.set('sPost', value);
  }

  get sStartTime() {
    return this.get('sStartTime');
  }
  set sStartTime(value) {
    return this.set('sStartTime', value);
  }

  get sEndTime() {
    return this.get('sEndTime');
  }
  set sEndTime(value) {
    return this.set('sEndTime', value);
  }

  get sDescription() {
    return this.get('sDescription');
  }
  set sDescription(value) {
    return this.set('sDescription', value);
  }
}

AV.Object.register(Work);

module.exports = Work;