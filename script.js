var prop = new Array();
var unit = new Array();
var x = new Array();

prop[0] = "Length";
unit[0] = new Array("Meter (m)", "Kilometer (km)", "Centimeter (cm)", "Micrometer (µ-m)", "Millimeter (mm)", "Nanometer (nm)", "Angstrom (Å)", "Astronomical unit (AU)", "Caliber (cal)", "Foot (ft)", "Inch (in)");
x[0] = new Array(1, 1000, 0.01, 0.000001, 0.001, 1E-9, 1E-10, 1.49598E11, .000254, 0.3048, 0.0254);

prop[1] = "Area";
unit[1] = new Array("Square meter (m²)", "Acre (acre)", "Hectare", "Square centimeter (cm²)", "Square kilometer (km²)", "Square foot (ft²)", "Square inch (in²)", "Square mile (mi²)", "Square yard (yd²)");
x[1] = new Array(1, 4046.856, 10000, 0.0001, 1000000, 9.290304E-02, 6.4516E-04, 2589988, 0.8361274);

prop[2] = "Mass";
unit[2] = new Array("Kilogram (kg)", "Gram (g)", "Milligram (mg)", "Microgram (µ-g)", "Ton");
x[2] = new Array(1, 0.001, 1e-6, 0.000000001, 1000);

prop[3] = "Velocity";
unit[3] = new Array("Meter/second (m/sec)", "Foot/minute (ft/min)", "Foot/second (ft/sec)", "Kilometer/hour (km/h)", "Mile/hour (mph)", "Speed of light (c)");
x[3] = new Array(1, 5.08E-03, 0.3048, 0.2777778, 0.44707, 299792458);

prop[4] = "Acceleration";
unit[4] = new Array("Meter/sq.sec (m/sec²)", "Foot/sq.sec (ft/sec²)", "Gravitational constant (g)", "Inch/sq.sec (in/sec²)");
x[4] = new Array(1, .3048, 9.806650, 2.54E-02);

prop[5] = "Electricity";
unit[5] = new Array("Coulomb (Cb)", "Abcoulomb", "Ampere hour (A hr)", "Faraday (F)", "Statcoulomb", "Millifaraday (mF)", "Microfaraday (mu-F)", "Picofaraday (pF)");
x[5] = new Array(1, 10, 3600, 96521.8999999997, .000000000333564, 96.5219, 9.65219E-02, 9.65219E-05);

prop[6] = "Energy";
unit[6] = new Array("Joule (J)", "BTU (mean)", "BTU (thermochemical)", "Calorie (SI) (cal)", "Calorie (mean)(cal)", "Calorie (thermo)", "Electron volt (eV)", "Erg (erg)", "Foot-pound force", "Foot-poundal", "Horsepower-hour", "Kilocalorie (SI)(kcal)", "Kilocalorie (mean)(kcal)", "Kilowatt-hour (kW hr)", "Ton of TNT", "Volt-coulomb (V Cb)", "Watt-hour (W hr)", "Watt-second (W sec)");
x[6] = new Array(1, 1055.87, 1054.35, 4.1868, 4.19002, 4.184, 1.6021E-19, .0000001, 1.355818, 4.214011E-02, 2684077.3, 4186.8, 4190.02, 3600000, 4.2E9, 1, 3600, 1);

prop[7] = "Force";
unit[7] = new Array("Newton (N)", "Dyne (dy)", "Kilogram force (kgf)", "Kilopond force (kpf)", "Kip (k)", "Ounce force (ozf)", "Pound force (lbf)", "Poundal");
x[7] = new Array(1, .00001, 9.806650, 9.806650, 4448.222, .2780139, .4535924, .138255);

prop[8] = "Power";
unit[8] = new Array("Watt (W)", "Kilowatt (kW)", "Megawatt (MW)", "Milliwatt (mW)", "BTU (SI)/hour", "BTU (thermo)/second", "BTU (thermo)/minute", "BTU (thermo)/hour", "Calorie (thermo)/second", "Calorie (thermo)/minute", "Erg/second", "Foot-pound force/hour", "Foot-pound force/minute", "Foot-pound force/second", "Horsepower(550 ft lbf/s)", "Horsepower (electric)", "Horsepower (boiler)", "Horsepower (metric)", "Horsepower (UK)", "Kilocalorie (thermo)/min", "Kilocalorie (thermo)/sec");
x[8] = new Array(1, 1000, 1000000, .001, .2930667, 1054.35, 17.5725, .2928751, 4.184, 6.973333E-02, .0000001, .0003766161, .02259697, 1.355818, 745.7, 746, 9809.5, 735.499, 745.7, 69.7333, 4184);

prop[9] = "Pressure";
unit[9] = new Array("Newton/sq.meter", "Atmosphere (normal)", "Atmosphere (techinical)", "Bar", "Centimeter mercury(cmHg)", "Centimeter water (4°C)", "Decibar", "Kgr force/sq.centimeter", "Kgr force/sq.meter", "Kip/square inch", "Millibar", "Millimeter mercury(mmHg)", "Pascal (Pa)", "Kilopascal (kPa)", "Megapascal (Mpa)", "Poundal/sq.foot", "Pound-force/sq.foot", "Pound-force/sq.inch (psi)", "Torr (mmHg,0°C)");
x[9] = new Array(1, 101325, 98066.5, 100000, 1333.22, 98.0638, 10000, 98066.5, 9.80665, 6894757, 100, 133.3224, 1, 1000, 1000000, 47.88026, 47.88026, 6894.757, 133.322);

prop[10] = "Temperature";
unit[10] = new Array("Degrees Celsius (°C)", "Degrees Fahrenheit (°F)", "Degrees Kelvin (°K)");
x[10] = new Array(1, 0.555555555555, 1);
tempIncrement = new Array(0, -32, -273.15);

prop[11] = "Time";
unit[11] = new Array("Second (sec)", "Day (mean solar)", "Day (sidereal)", "Hour (mean solar)", "Hour (sidereal)", "Minute (mean solar)", "Minute (sidereal)", "Month (mean calendar)", "Second (sidereal)", "Year (calendar)", "Year (tropical)", "Year (sidereal)");
x[11] = new Array(1, 8.640E4, 86164.09, 3600, 3590.17, 60, 60, 2628000, .9972696, 31536000, 31556930, 31558150);

prop[12] = "Volume";
unit[12] = new Array("Cubic Meter (m³)", "Cubic centimeter (cm³)", "Cubic millimeter (mm³)", "Acre-foot", "Barrel (oil)", "Board foot", "Bushel (US)", "Cup", "Fluid ounce (US)", "Cubic foot", "Gallon (UK)", "Gallon (US,dry)", "Gallon (US,liq)", "Gill (UK)", "Gill (US)", "Cubic inch (in³)", "Liter (new)", "Liter (old)", "Ounce (UK,fluid)", "Ounce (US,fluid)", "Peck (US)", "Pint (US,dry)", "Pint (US,liq)", "Quart (US,dry)", "Quart (US,liq)", "Stere", "Tablespoon", "Teaspoon", "Ton (register)", "Cubic yard");
x[12] = new Array(1, .000001, .000000001, 1233.482, .1589873, .002359737, .03523907, .0002365882, .00002957353, .02831685, .004546087, .004404884, .003785412, .0001420652, .0001182941, .00001638706, .001, .001000028, .00002841305, .00002957353, 8.8097680E-03, .0005506105, 4.7317650E-04, .001101221, 9.46353E-04, 1, .00001478676, .000004928922, 2.831685, .7645549);


function UpdateUnitMenu(propMenu, unitMenu) {
    var i;
    i = propMenu.selectedIndex;
    FillMenuWithArray(unitMenu, unit[i]);
}

function FillMenuWithArray(myMenu, myArray) {
    var i;
    myMenu.length = myArray.length;
    for (i = 0; i < myArray.length; i++) {
        myMenu.options[i].text = myArray[i];
    }
}

function CalculateUnit(sourceForm, targetForm) {
    var sourceValue = sourceForm.unit_input.value;

    sourceValue = parseFloat(sourceValue);
    if (!isNaN(sourceValue) || sourceValue == 0) {
        sourceForm.unit_input.value = sourceValue;
        ConvertFromTo(sourceForm, targetForm);
    }
}

function ConvertFromTo(sourceForm, targetForm) {
    var propIndex;
    var sourceIndex;
    var sourceFactor;
    var targetIndex;
    var targetFactor;
    var result;

    propIndex = document.property_form.the_menu.selectedIndex;

    
    sourceIndex = sourceForm.unit_menu.selectedIndex;
    sourceFactor = x[propIndex][sourceIndex];

    targetIndex = targetForm.unit_menu.selectedIndex;
    targetFactor = x[propIndex][targetIndex];

    result = sourceForm.unit_input.value;
    
    if (prop[propIndex] == "Temperature") {
        result = parseFloat(result) + tempIncrement[sourceIndex];
    }
    result = result * sourceFactor;
    result = result / targetFactor;
    if (prop[propIndex] == "Temperature") {
        result = parseFloat(result) - tempIncrement[targetIndex];
    }
    targetForm.unit_input.value = result;
}

window.onload = function (e) {
    FillMenuWithArray(document.property_form.the_menu, prop);
    UpdateUnitMenu(document.property_form.the_menu, document.input_form.unit_menu);
    UpdateUnitMenu(document.property_form.the_menu, document.result_form.unit_menu)
}