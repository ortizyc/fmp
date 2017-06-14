const AV = require('../utils/av-weapp-min.js');

class Project extends AV.Object {

  get oUser() {
    return this.get('oUser')
  }
  set oUser(value) {
    return this.set('oUser', value);
  }

  get sProjectName() {
    return this.get('sProjectName');
  }
  set sProjectName(value) {
    return this.set('sProjectName', value);
  }

  get sDuty() {
    return this.get('sDuty');
  }
  set sDuty(value) {
    return this.set('sDuty', value);
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

  get sLink() {
    return this.get('sLink');
  }
  set sLink(value) {
    return this.set('sLink', value);
  }

  get sDescription() {
    return this.get('sDescription');
  }
  set sDescription(value) {
    return this.set('sDescription', value);
  }
}

AV.Object.register(Project);

module.exports = Project;