
const items = [
    {
        id:1,
        name: "Temperature",
        units: [
            {
                id:'celsius',
                name: 'Degree Celsius'
            },
            {
                id:'fahrenheit',
                name: 'Fahrenheit',
            },
            {
                id:'kelvin',
                name:'Kelvin'
            }
        ] ,
        allFurmulas:[
            {
                id:'celsius-fahrenheit',
                furmulas: [
                    {
                        name: 'celsius',
                        furmula:` ('fahrenheit' - 32) * 5/9`
                    },
                    {
                        name: 'fahrenheit',
                        furmula:` (celsius * 9/5) + 32`
                    },
                ]
            },
            {
                id:'celsius-kelvin',
                furmulas: [
                    {
                        name: 'kelvin',
                        furmula:` celsius + 273.15`
                    },
                    {
                        name: 'celsius',
                        furmula:`kelvin - 273.15`
                    }
                ]
            },
            {
                id:'fahrenheit-kelvin',
                furmulas: [
                    {
                        name: 'fahrenheit',
                        furmula:` (kelvin - 273.15) * 9/5 + 32`
                    },
                    {
                        name: 'kelvin',
                        furmula:`(fahrenheit - 32) * 5/9 + 273.15`
                    },
                ]
            }
        ] 
    },
    {
        id:2,
        name:'Frequency',
        units: [
            {
                id:'hertz',
                name:'Hertz'
            },
            {
                id:'kilohertz',
                name:'Kilohertz'
            },
            {
                id:'megahertz',
                name:'Megahertz'
            },
        ],
        allFurmulas:[
            {
                id:'hertz-kilohertz',
                furmulas: [
                    {
                        name: 'kilohertz',
                        furmula:`hertz/1000`
                    },
                    {
                        name: 'hertz',
                        furmula:`kilohertz * 1000`
                    },
                ]
            },
            {
                id:'hertz-megahertz',
                furmulas: [
                    {
                        name: 'megahertz',
                        furmula:` hertz / 1000000`
                    },
                    {
                        name: 'hertz',
                        furmula:`megahertz * 1000000`
                    }
                ]
            },
        ] 
    }
]

export default items