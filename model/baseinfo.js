const AV = require('../utils/av-weapp-min.js');

class BaseInfo extends AV.Object {

  get oUser(){
    return this.get('oUser')
  }
  set oUser(value){
    return this.set('oUser',value);
  }

  get sName(){
    return this.get('sName');
  }
  set sName(value){
    return this.set('sName',value);
  }

  get nMobile() {
    return this.get('nMobile');
  }
  set nMobile(value) {
    return this.set('nMobile', value);
  }

  get nGender() {
    return this.get('nGender');
  }
  set nGender(value) {
    return this.set('nGender', value);
  }

  get sBirth() {
    return this.get('sBirth');
  }
  set sBirth(value) {
    return this.set('sBirth', value);
  }

  get nYearOfWork() {
    return this.get('nYearOfWork');
  }
  set nYearOfWork(value) {
    return this.set('nYearOfWork', value);
  }

  get sJobIntension() {
    return this.get('sJobIntension');
  }
  set sJobIntension(value) {
    return this.set('sJobIntension', value);
  }

  get sProfSkill() {
    return this.get('sProfSkill');
  }
  set sProfSkill(value) {
    return this.set('sProfSkill', value);
  }

  get sEmail() {
    return this.get('sEmail');
  }
  set sEmail(value) {
    return this.set('sEmail', value);
  }

  get sLocation() {
    return this.get('sLocation');
  }
  set sLocation(value) {
    return this.set('sLocation', value);
  }

  get sSelfAssessment() {
    return this.get('sSelfAssessment');
  }
  set sSelfAssessment(value) {
    return this.set('sSelfAssessment', value);
  }
}

AV.Object.register(BaseInfo);

module.exports = BaseInfo;