var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
			var d = new Date();
			return String(Math.floor(d.getTime() / 1000));
		},
		UnixMillisecond: function(){
			var d = new Date();
			return String(d.getTime());
		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
						var d = new Date();
						if (d.getHours() > 11) {
							if (d.getSeconds() < 10) {
								return String((d.getHours() - 12) + ':' + d.getMinutes() + ':0' + d.getSeconds() + ' PM');
							} else {
								return String((d.getHours() - 12) + ':' + d.getMinutes() + ':' + d.getSeconds() + ' PM');
							}
						} else {
							if (d.getSeconds() < 10) {
								return String((d.getHours() - 12) + ':' + d.getMinutes() + ':0' + d.getSeconds() + ' AM');
							} else {
								return String((d.getHours() - 12) + ':' + d.getMinutes() + ':' + d.getSeconds() + ' AM');
							}
						}
					},
	   	    WithOutSeconds: function() {
						 var d = new Date();
						 if (d.getHours() > 11) {
							 if(d.getMinutes() < 10) {
								 return String((d.getHours() - 12) + ':0' + d.getMinutes() + ' PM');
							 } else {
								 return String((d.getHours() - 12) + ':' + d.getMinutes() + ' PM');
							 }
						 } else {
							 if(d.getMinutes() < 10) {
								 return String((d.getHours() - 12) + ':0' + d.getMinutes() + ' AM');
							 } else {
								 return String((d.getHours() - 12) + ':' + d.getMinutes() + ' AM');
							 }
						 }
					 }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
					var d = new Date();
					return String((d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear());
				},
			Name: function(){
				var d = new Date();
				if (d.getMonth() === 0) {
					return String('January ' + d.getDate() + ', ' + d.getFullYear());
				} else if (d.getMonth() === 1) {
					return String('February ' + d.getDate() + ', ' + d.getFullYear());
				} else if (d.getMonth() === 2) {
					return String('March ' + d.getDate() + ', ' + d.getFullYear());
				} else if (d.getMonth() === 3) {
					return String('April ' + d.getDate() + ', ' + d.getFullYear());
				} else if (d.getMonth() === 4) {
					return String('May ' + d.getDate() + ', ' + d.getFullYear());
				} else if (d.getMonth() === 5) {
					return String('June ' + d.getDate() + ', ' + d.getFullYear());
				} else if (d.getMonth() === 6) {
					return String('July ' + d.getDate() + ', ' + d.getFullYear());
				} else if (d.getMonth() === 7) {
					return String('August ' + d.getDate() + ', ' + d.getFullYear());
				} else if (d.getMonth() === 8) {
					return String('September ' + d.getDate() + ', ' + d.getFullYear());
				} else if (d.getMonth() === 9) {
					return String('October ' + d.getDate() + ', ' + d.getFullYear());
				} else if (d.getMonth() === 10) {
					return String('November ' + d.getDate() + ', ' + d.getFullYear());
				} else if (d.getMonth() === 11) {
					return String('December ' + d.getDate() + ', ' + d.getFullYear());
				}
			}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
				var d = new Date();
				return String(d.getSeconds());
			},
			DblDigit: function(){
				var d = new Date();
				if (d.getSeconds() < 10) {
					return String('0' + d.getSeconds());
				} else {
					return String(d.getSeconds());
				}
			}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
				var d = new Date();
				return String(d.getMinutes());
			},
			DblDigit: function(){
				var d = new Date();
				if (d.getMinutes() < 10) {
					return String('0' + d.getMinutes());
				} else {
					return String(d.getMinutes());
				}
			}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
				var d = new Date();
				return String(d.getHours());
			},
			TwelveHour: function() {
				var d = new Date();
				if (d.getHours() > 11) {
					return String(d.getHours() - 12);
				} else {
					return String(d.getHours());
				}
			},
			AMPM: (function() {
				return {
					UpperCase: function(){
						var d = new Date();
						if (d.getHours() > 11) {
							return 'PM';
						} else {
							return 'AM';
						}
					},
					LowerCase: function(){
						var d = new Date();
						if (d.getHours() > 11) {
							return 'pm';
						} else {
							return 'am';
						}
					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
				var d = new Date();
				if (d.getDay() === 0) {
					return 'Sunday';
				} else if (d.getDay() === 1) {
					return 'Monday';
				} else if (d.getDay() === 2) {
					return 'Tuesday';
				} else if (d.getDay() === 3) {
					return 'Wednesday';
				} else if (d.getDay() === 4) {
					return 'Thursday';
				} else if (d.getDay() === 5) {
					return 'Friday';
				} else if (d.getDay() === 6) {
					return 'Saturday';
				}
			},
			AbrDayOfWeek: function(){
				var d = new Date();
				if (d.getDay() === 0) {
					return 'Sun';
				} else if (d.getDay() === 1) {
					return 'Mon';
				} else if (d.getDay() === 2) {
					return 'Tue';
				} else if (d.getDay() === 3) {
					return 'Wed';
				} else if (d.getDay() === 4) {
					return 'Thu';
				} else if (d.getDay() === 5) {
					return 'Fri';
				} else if (d.getDay() === 6) {
					return 'Sat';
				}
			},
			FirstTwoOfWeek: function(){
				var d = new Date();
				if (d.getDay() === 0) {
					return 'Su';
				} else if (d.getDay() === 1) {
					return 'Mo';
				} else if (d.getDay() === 2) {
					return 'Tu';
				} else if (d.getDay() === 3) {
					return 'We';
				} else if (d.getDay() === 4) {
					return 'Th';
				} else if (d.getDay() === 5) {
					return 'Fr';
				} else if (d.getDay() === 6) {
					return 'Sa';
				}
			},
			WeekOfYear: function(){
				var d = new Date();
				var janFirst = new Date(d.getFullYear(), 0, 1);
				var week = Math.ceil( (((d - janFirst) / 86400000) + janFirst.getDay() + 1) / 7 );
				return String(week);
			}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
						var d = new Date();
						return String(d.getDate());
					},
					Ordinal: function(){
						var d = new Date();
						if (d.getDate() % 10 === 1 && d.getDate() != 11) {
							return String(d.getDate() + 'st');
						} else if (d.getDate() % 10 === 2 && d.getDate() != 12) {
							return String(d.getDate() + 'nd');
						} else if (d.getDate() % 10 === 3 && d.getDate() != 13) {
							return String(d.getDate() + 'rd');
						} else {
							return String(d.getDate() + 'th');
						}
					},
					DateDblDigit: function(){
						var d = new Date();
						if (d.getDate() < 10) {
							return String('0' + d.getDate());
						}
						else {
							return String(d.getDate());
						}
					}
				}
			})(),
			MonthNumber: function(){
				var d = new Date();
				// return '' + (d.getMonth() + 1);
				return String(d.getMonth() + 1);
			},
			MonthNumberDblDigit: function(){
				var d = new Date();
						if (d.getMonth() < 10) {
							return String('0' + (d.getMonth() + 1));
						}
						else {
							return String(d.getMonth() + 1);
						}
			},
			AbrOfCurrentMonth: function(){
				var d = new Date();
				if (d.getMonth() === 0) {
					return 'Jan';
				} else if (d.getMonth() === 1) {
					return 'Feb';
				} else if (d.getMonth() === 2) {
					return 'Mar';
				} else if (d.getMonth() === 3) {
					return 'Apr';
				} else if (d.getMonth() === 4) {
					return 'May';
				} else if (d.getMonth() === 5) {
					return 'Jun';
				} else if (d.getMonth() === 6) {
					return 'Jul';
				} else if (d.getMonth() === 7) {
					return 'Aug';
				} else if (d.getMonth() === 8) {
					return 'Sep';
				} else if (d.getMonth() === 9) {
					return 'Oct';
				} else if (d.getMonth() === 10) {
					return 'Nov';
				} else if (d.getMonth() === 11) {
					return 'Dec';
				}
			},
			CurrentMonth: function(){
				var d = new Date();
				if (d.getMonth() === 0) {
					return 'January';
				} else if (d.getMonth() === 1) {
					return 'February';
				} else if (d.getMonth() === 2) {
					return 'March';
				} else if (d.getMonth() === 3) {
					return 'April';
				} else if (d.getMonth() === 4) {
					return 'May';
				} else if (d.getMonth() === 5) {
					return 'June';
				} else if (d.getMonth() === 6) {
					return 'July';
				} else if (d.getMonth() === 7) {
					return 'August';
				} else if (d.getMonth() === 8) {
					return 'September';
				} else if (d.getMonth() === 9) {
					return 'October';
				} else if (d.getMonth() === 10) {
					return 'November';
				} else if (d.getMonth() === 11) {
					return 'December';
				}
			}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
						var d = new Date();
						var start = new Date(d.getFullYear(), 0, 0);
						var diff = d - start;
						var oneDay = 1000 * 60 * 60 * 24;
						var day = Math.floor(diff / oneDay);
						return String(day);
					},
					Ordinal: function(){
						var d = new Date();
						var start = new Date(d.getFullYear(), 0, 0);
						var diff = d - start;
						var oneDay = 1000 * 60 * 60 * 24;
						var day = Math.floor(diff / oneDay);

						if (day % 10 === 1 && day != 11) {
							return String(day + 'st');
						} else if (day % 10 === 2 && day != 12) {
							return String(day + 'nd');
						} else if (day % 10 === 3 && day != 13) {
							return String(day + 'rd');
						} else {
							return String(day + 'th');
						}
					}
				}
			})(),
			YearFull: function(){
				var d = new Date();
				return String(d.getFullYear());
			},
			YearAbr: function(){
				var d = new Date();
				return String(d.getFullYear() - 2000);
			}
		}
	})(),
	Defaults: function(){
		var d = new Date();
		var defaultTime = String(d.getFullYear() + '-');
		if (d.getMonth() < 10) {
			defaultTime = String(defaultTime + 0 + (d.getMonth() + 1) + '-');
		} else {
			defaultTime = String(defaultTime + (d.getMonth() + 1) + '-');
		}

		if (d.getDate() < 10) {
			defaultTime = String(defaultTime + 0 + d.getDate() + 'T');
		} else {
			defaultTime = String(defaultTime + d.getDate() + 'T');
		}

		if (d.getHours() < 10) {
			defaultTime = String(defaultTime + 0 + d.getHours() + ':');
		} else {
			defaultTime = String(defaultTime + d.getHours() + ':');
		}

		if(d.getMinutes() < 10) {
			defaultTime = String(defaultTime + 0 + d.getMinutes() + ':');
		} else {
			defaultTime = String(defaultTime + d.getMinutes() + ':');
		}

		if(d.getSeconds() < 10) {
			defaultTime = String(defaultTime + 0 + d.getSeconds());
		} else {
			defaultTime = String(defaultTime + d.getSeconds());
		}

		return defaultTime;
	}
  }
})();