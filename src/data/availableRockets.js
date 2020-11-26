
// Photos
import AtlasV from '../resources/rocket/atlasIV.png';
import DeltaIVHeavy from '../resources/rocket/deltaVheavy.png';
import Electron from '../resources/rocket/electron.png';
import Falcon9 from '../resources/rocket/falcon9.png';
import FalconHeavy from '../resources/rocket/falconHeavy.png';
import ProtonM from '../resources/rocket/protonM.png';

const availableRockets = [

	{
		'title': "Atlas V",
		'image': AtlasV,
		'cost': "$110 million",
		'LEO': "45,240 lbs",
		'GTO': "19,620 lbs",
		'totalLaunches': 83,
		'failedLaunches': 0
	},

	{
		'title': "Delta IV Heavy",
		'image': DeltaIVHeavy,
		'cost': "$350 million",
		'LEO': "63,470 lbs",
		'GTO': "31,350 lbs",
		'MTO': "18,000 lbs",
		'totalLaunches': 11,
		'failedLaunches': 0
	},

	{
		'title': "Electron",
		'image': Electron,
		'cost': "$6 million",
		'LEO': "660 lbs",
		'totalLaunches': 14,
		'failedLaunches': 2
	},

	{
		'title': "Falcon 9",
		'image': Falcon9,
		'cost': "$60 million",
		'LEO': "50,300 lbs",
		'GTO': "18,300 lbs",
		'MTO': "8,860 lbs",
		'totalLaunches': 93,
		'failedLaunches': 1
	},

	{
		'title': "Falcon Heavy",
		'image': FalconHeavy,
		'cost': "$90 million",
		'LEO': "140,700 lbs",
		'GTO': "58,900 lbs",
		'MTO': "37,700 lbs",
		'PTO': "7,700 lbs",
		'totalLaunches': 3,
		'failedLaunches': 0
	},

	{
		'title': "Proton-M",
		'image': ProtonM,
		'cost': "$65 million",
		'LEO': "51,000 lbs",
		'GTO': "15,260 lbs",
		'totalLaunches': 111,
		'failedLaunches': 9
	}
];

export default availableRockets;
