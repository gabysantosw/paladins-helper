class Champion {
  constructor(name, type, principalDamage, abilityDamage, ultimateDamage) {
    this.name = name;
    this.type = type; // damage, flank, frontline, support
    this.principalDamage = principalDamage; // direct, area, both
    this.abilityDamage = abilityDamage; // direct, area, both, none
    this.ultimateDamage = ultimateDamage; // direct, area, none
  }
}

// CHAMPIONS - 14/01/2020
// name, type, principalDamage, abilityDamage, ultimateDamage

// DAMAGE
const tiberius = 
  new Champion('tiberius', 'damage', 'direct', 'area', 'none');
const tyra = 
  new Champion('tyra', 'damage', 'direct', 'area', 'none');
const viktor = 
  new Champion('viktor', 'damage', 'direct', 'area', 'area');
const strix = 
  new Champion('strix', 'damage', 'direct', 'direct', 'area');
const cassie = 
  new Champion('cassie', 'damage', 'direct', 'both', 'none');
const drogoz = 
  new Champion('drogoz', 'damage', 'area', 'area', 'none');
const lian = 
  new Champion('lian', 'damage', 'direct', 'both', 'area');
const bombKing = 
  new Champion('bombking', 'damage', 'area', 'area', 'area');
const willo = 
  new Champion('willo', 'damage', 'area', 'area', 'none');
const kinessa = 
  new Champion('kinessa', 'damage', 'direct', 'direct', 'direct');
const imani = 
  new Champion('imani', 'damage', 'direct', 'area', 'area');
const vivian = 
  new Champion('vivian', 'damage', 'direct', 'none', 'area');
const dredge = 
  new Champion('dredge', 'damage', 'area', 'area', 'none');
const shaLin = 
  new Champion('shaLin', 'damage', 'direct', 'direct', 'none');



// FLANK

const skye = 
  new Champion('skye', 'flank', 'direct', 'direct', 'area');
const buck = 
  new Champion('buck', 'flank', 'direct', 'both', 'direct');        
const maeve = 
  new Champion('maeve', 'flank', 'direct', 'direct', 'none');
const lex = 
  new Champion('lex', 'flank', 'direct', 'direct', 'area');
const talus = 
  new Champion('talus', 'flank', 'direct', 'direct', 'direct');
const evie = 
  new Champion('evie', 'flank', 'area', 'none', 'area');
const koga = 
  new Champion('koga', 'flank', 'direct', 'none', 'area');
const androxus = 
  new Champion('androxus', 'flank', 'direct', 'both', 'area');
const zhin = 
  new Champion('zhin', 'flank', 'direct', 'both', 'direct');
const moji = 
  new Champion('moji', 'flank', 'area', 'direct', 'none');



// FRONTLINE

const barik = 
  new Champion('barik', 'frontline', 'direct', 'direct', 'area');
const khan = 
  new Champion('khan', 'frontline', 'direct', 'direct', 'direct');
const ruckus = 
  new Champion('ruckus', 'frontline', 'direct', 'area', 'area');
const makoa = 
  new Champion('makoa', 'frontline', 'direct', 'both', 'area');
const inara = 
  new Champion('inara', 'frontline', 'direct', 'area', 'area');
const tovarld = 
  new Champion('tovarld', 'frontline', 'direct', 'direct', 'area');
const ash = 
  new Champion('ash', 'frontline', 'area', 'both', 'area');
const raum = 
  new Champion('raum', 'frontline', 'direct', 'direct', 'area');
const terminus = 
  new Champion('terminus', 'frontline', 'area', 'both', 'area');
const fernando = 
  new Champion('fernando', 'frontline', 'area', 'area', 'none');
const atlas= 
  new Champion('atlas', 'frontline', 'direct', 'none', 'none');



// SUPPORT

const jenos =
  new Champion('jenos', 'support', 'direct', 'direct', 'area');
const furia =
  new Champion('furia', 'support', 'direct', 'area', 'none');
const io =
  new Champion('io', 'support', 'direct', 'direct', 'area');
const grover =
  new Champion('grover', 'support', 'direct', 'direct', 'none');
const pip =
  new Champion('pip', 'support', 'area', 'area', 'area');
const malDamba =
  new Champion('malDamba', 'support', 'direct', 'area', 'none');
const seris =
  new Champion('seris', 'support', 'area', 'area', 'area');
const grohk =
  new Champion('grohk', 'support', 'direct', 'area', 'area');
const ying =
  new Champion('ying', 'support', 'direct', 'area', 'none');