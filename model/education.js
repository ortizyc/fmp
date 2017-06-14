const AV = require('../utils/av-weapp-min.js');

class Education extends AV.Object {

  get oUser() {
    return this.get('oUser')
  }
  set oUser(value) {
    return this.set('oUser', value);
  }

  get sSchoolName() {
    return this.get('sSchoolName');
  }
  set sSchoolName(value) {
    return this.set('sSchoolName', value);
  }

  get sMajor() {
    return this.get('sMajor');
  }
  set sMajor(value) {
    return this.set('sMajor', value);
  }

  get nAcademic() {
    return this.get('nAcademic');
  }
  set nAcademic(value) {
    return this.set('nAcademic', value);
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
}

AV.Object.register(Education);

module.exports = Education;