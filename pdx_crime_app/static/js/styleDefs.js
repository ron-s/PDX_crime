var aggravatedAssaultImage = new ol.style.Circle({
    radius: 3,
    stroke: new ol.style.Stroke({
        color: '#3399ff', 
        width:1
    })
});

var arsonImage = new ol.style.Circle({
    radius: 4,
    fill: new ol.style.Fill({
        color: '#dc702a'
    })
});

var simpleAssaultImage = new ol.style.Circle({
    radius: 2,
    fill: new ol.style.Fill({
        color: '#ae0f83'
    })
}); 

var burglaryImage = new ol.style.RegularShape({
    fill: new ol.style.Fill({
        color: '#ffc3a0'
    }),
    stroke: new ol.style.Stroke({
        color: '#ffc3a0', 
        width:2
    }),
    points: 4,
    radius: 3,
    radius2: 0,
    angle: Math.PI / 4
});

var curfewImage = new ol.style.Circle({
    radius: 6,
    fill: new ol.style.Fill({
        color: '#52361f'
    })
}); 

var disorderlyConductImage = new ol.style.Circle({
    radius: 3,
    fill: new ol.style.Fill({
        color: '#cbb946'
    })
}); 

var drugsImage = new ol.style.Circle({
    radius: 3,
    fill: new ol.style.Fill({
        color: '#f4dd2c'
    })
}); 

var DUIIImage = new ol.style.Circle({
    radius: 3,
    fill: new ol.style.Fill({
        color: '#85dead'
    })
});

var embezzlementImage = new ol.style.Circle({
    radius: 4,
    fill: new ol.style.Fill({
        color: '#797f8b'
    })    
});

var forgeryImage = new ol.style.Circle({
    radius: 3,
    fill: new ol.style.Fill({
        color: '#3b757a'
    })    
});    

var fraudImage = new ol.style.RegularShape({
    fill: new ol.style.Fill({
        color: '#3399ff'
    }),
    points: 4,
    radius: 4,
    angle: Math.PI / 4
});   

var homicideImage = new ol.style.Circle({
    radius: 8,
    stroke: new ol.style.Stroke({
        color: 'red', 
        width:4
    })
});

var kidnapImage = new ol.style.RegularShape({
    fill: new ol.style.Fill({
        color: '#f4dd2c'
    }),
    points: 4,
    radius: 6,
    angle: Math.PI / 4
});

var larcenyImage = new ol.style.Circle({
    radius: 2,
    fill: new ol.style.Fill({
        color: 'purple'
    })
});

var liquorLawsImage = new ol.style.Circle({
    radius: 3,
    fill: new ol.style.Fill({
        color: 'orange'
    })
});

var motorVehicleTheftImage = new ol.style.Circle({
    radius: 2,
    fill: new ol.style.Fill({
        color: 'blue'
    })
});

var offensesAgainstFamilyImage = new ol.style.Circle({
    radius: 5,
    fill: new ol.style.Fill({
        color: 'brown'
    })
});

var prostitutionImage = new ol.style.Circle({
    radius: 5,
    fill: new ol.style.Fill({
        color: '#0083cb'
    })
});

var rapeImage = new ol.style.Circle({
    radius: 6,
    stroke: new ol.style.Stroke({
        color: '#c087e9', 
        width:4
    })
});

var robberyImage = new ol.style.Circle({
    radius: 3,
    stroke: new ol.style.Stroke({
        color: '#e6776b', 
        width:2
    })
});

var runawayImage = new ol.style.RegularShape({
    fill: new ol.style.Fill({
        color: '#00cb6e'
    }),
    points: 4,
    radius: 6,
    angle: Math.PI / 4
})

var sexOffensesImage = new ol.style.RegularShape({
    fill: new ol.style.Fill({
        color: '#92a8d1'
    }),
    points: 4,
    radius: 6,
    angle: Math.PI / 4
})

var stolenPropertyImage = new ol.style.Circle({
    radius: 4,
    fill: new ol.style.Fill({
        color: '#f1825f'
    })
});

var tresspassImage = new ol.style.Circle({
    radius: 2,
    fill: new ol.style.Fill({
        color: '#00accb'
    })
});

var vandalismImage = new ol.style.Circle({
    radius: 2,
    fill: new ol.style.Fill({
        color: '#fabc02'
    })
});

var weaponsImage = new ol.style.RegularShape({
    fill: new ol.style.Fill({
        color: 'red'
    }),
    stroke: new ol.style.Stroke({
        color: 'red', 
        width:2
    }),
    points: 4,
    radius: 4,
    radius2: 0,
    angle: Math.PI / 4
});

var styles = {
    'Aggravated Assault' : new ol.style.Style({
      image: aggravatedAssaultImage
    }),
    'Arson' : new ol.style.Style({
      image: arsonImage
    }),
    'Assault, Simple' : new ol.style.Style({
      image: simpleAssaultImage
    }),
    'Burglary' : new ol.style.Style({
      image: burglaryImage
    }),
    'Curfew' : new ol.style.Style({
      image: curfewImage
    }),
    'Disorderly Conduct' : new ol.style.Style({
      image: disorderlyConductImage            
    }),
    'Drugs' : new ol.style.Style({
      image: drugsImage            
    }),    
    'DUII' : new ol.style.Style({
      image: DUIIImage
    }),
    'Embezzlement' : new ol.style.Style({
      image: embezzlementImage            
    }),
    'Forgery' : new ol.style.Style({
      image: forgeryImage            
    }),
    'Fraud' : new ol.style.Style({
      image: fraudImage            
    }),
    'Homicide': new ol.style.Style({
      image: homicideImage
    }),
    'Kidnap' : new ol.style.Style({
      image: kidnapImage            
    }),
    'Larceny' : new ol.style.Style({
      image: larcenyImage            
    }),
    'Liquor Laws' : new ol.style.Style({
      image: liquorLawsImage            
    }),
    'Motor Vehicle Theft' : new ol.style.Style({
      image: motorVehicleTheftImage            
    }),
    'Offenses Against Family' : new ol.style.Style({
      image: offensesAgainstFamilyImage            
    }),    
    'Prostitution' : new ol.style.Style({
      image: prostitutionImage            
    }),
    'Rape' : new ol.style.Style({
      image: rapeImage            
    }),
    'Robbery' : new ol.style.Style({
      image: robberyImage            
    }),    
    'Runaway' : new ol.style.Style({
      image: runawayImage            
    }),    
    'Sex Offenses' : new ol.style.Style({
      image: sexOffensesImage            
    }),
    'Stolen Property' : new ol.style.Style({
      image: stolenPropertyImage            
    }),
    'Tresspass' : new ol.style.Style({
      image: tresspassImage            
    }),
    'Vandalism' : new ol.style.Style({
      image: vandalismImage            
    }),
    'Weapons' : new ol.style.Style({
      image: weaponsImage            
    }),
};
