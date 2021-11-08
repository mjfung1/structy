
// 1396. Design Underground System



var UndergroundSystem = function() {
    this.checkin = {};
    this.averageTime = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    const checkIn = this.checkIn;
    checkIn[id] = {stationName, startTime: t};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let average = this.averageTime;
    let checkIn = this.checkIn;
    let startStation = checkIn[id].stationName;
    let travelTime = t - checkIn[id].startTime;
    let key = startStation + ',' + stationName;
    
    if (!(key in average)) {
        average[key] = { sum: travelTime, count: 1 };
    } else {
        average[key] = { sum: average[key].sum + travelTime, count: average[key].count + 1 }
    }
    
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let average = this.averageTime;
    let key = startStation + ',' + endStation;
    return average[key].sum / average[key].count;
};