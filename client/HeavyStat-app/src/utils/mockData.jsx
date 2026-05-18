 export const ProfileMenuItems = [
    {
      id: 1,
      icon: 'fas fa-user-circle',
      title: 'Мой профиль',
      subtitle: 'Личная информация',
    },
    {
      id: 6,
      icon:'fa-solid fa-trophy',
      title: 'Достижение',
      subtitle: 'Ваши достижения',
   
    },
    {
      id: 2,
      icon: 'fa-solid fa-pen-ruler',
      title: 'Замеры',
      subtitle: 'Замеры мышц',
     
    },
    {
      id: 3,
      icon: 'fas fa-paint-brush',
      title: 'Тема оформления',
      subtitle: 'Выберите стиль',
    
    },
    {
      id: 4,
      icon: 'fas fa-chart-line',
      title: 'Ваши AI данные',
      subtitle: 'Данные для AI генерации ',
     
    },
    {
      id: 5,
      icon: 'fas fa-question-circle',
      title: 'Помощь',
      subtitle: 'Поддержка и FAQ',
   
    },
    
  ];
  export const modalWindowsForProfile=[
    "ProfileSettingsModal","Security","Theme","Stat","Help"
  ]
 export const footerNavItems = [
  { id: 'trainMode', icon: 'fas fa-dumbbell', label: 'Тренировки', path: '/trainMode' },
  { id: 'progressMain', icon: 'fas fa-chart-bar', label: 'Прогресс', path: '/progress' },
  { id: 'trainingPlan', icon: 'fas fa-calendar-alt', label: 'План', path: '/trainPlan' },
  { id: 'profileMain', icon: 'fas fa-user', label: 'Профиль', path: '/profile' }
];
 export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
   

export const achievements = [
        { id: 1, title: "Первый подход", description: "Выполните первое упражнение", icon: "fas fa-dumbbell", unlocked: true },
        { id: 2, title: "Новичок", description: "Завершите 5 тренировок", icon: "fas fa-star", unlocked: true },
        { id: 13, title: "Газанчик", description: "Выполните 67 упражнений", icon: "fa-solid fa-67", unlocked: true },

        // { id: 3, title: "Любитель", description: "Завершите 25 тренировок", icon: "fas fa-medal", unlocked: false },
        // { id: 4, title: "Профессионал", description: "Завершите 100 тренировок", icon: "fas fa-trophy", unlocked: false },
        // { id: 5, title: "Тяжеловес", description: "Поднимите общий тоннаж 1000 кг", icon: "fas fa-weight-hanging", unlocked: true },
        // { id: 6, title: "Силач", description: "Поднимите общий тоннаж 5000 кг", icon: "fas fa-fist-raised", unlocked: false },
        // { id: 7, title: "Легенда", description: "Поднимите общий тоннаж 10000 кг", icon: "fas fa-crown", unlocked: false },
        // { id: 8, title: "Марафонец", description: "Проведите 10 часов в зале", icon: "fas fa-hourglass-half", unlocked: false },
        // { id: 9, title: "Железный человек", description: "Проведите 50 часов в зале", icon: "fas fa-robot", unlocked: false },
        // { id: 10, title: "Пик формы", description: "Достигните целевого веса", icon: "fas fa-chart-line", unlocked: false },
        // { id: 11, title: "Экспериментатор", description: "Выполните 10 разных упражнений", icon: "fas fa-flask", unlocked: true },
        // { id: 12, title: "Мастер техники", description: "Выполните 50 разных упражнений", icon: "fas fa-brain", unlocked: false }
    ]

export const daysData=[
  {
    id:1,
    dayName:"ПН",
    isActive:false

  },
    {
      id:2,
    dayName:"ВТ",
    isActive:false

  },
    {
      id:3,
    dayName:"СР",
    isActive:false

  },
    {
      id:4,
    dayName:"ЧТ",
    isActive:false

  },
    {
      id:5,
    dayName:"ПТ",
    isActive:false

  },
    {
      id:6,
    dayName:"СБ",
    isActive:true

  },
    {
      id:7,
    dayName:"ВС",
    isActive:false

  }
]

export const exerciseNames = [
  "Приседания со штангой",
  "Жим лежа",
  "Становая тяга",
  "Подтягивания на перекладине",
  "Выпады с гантелями",
  "Отжимания от пола",
  "Планочка",
  "Скручивания на пресс",
  "Армейский жим",
  "Тяга верхнего блока",
  "Махи гантелями в стороны",
  "Гиперэкстензия",
  "Берпи",
  "Обратные отжимания",
  "Подъем ног в висе"
];

 

import chestPng from '../assets/iconForMuscules/chest.png'
import triceps from '../assets/iconForMuscules/triceps.png'
import bicepsPng from '../assets/iconForMuscules/biceps.png'
import backPng from '../assets/iconForMuscules/back.png'
import shalderPng from '../assets/iconForMuscules/shalder.png'
import torsoPng from '../assets/iconForMuscules/torso.png'
import legPng from '../assets/iconForMuscules/leg.png'
import cardioPng from '../assets/iconForMuscules/cardio.png'
import yoga from '../assets/iconForMuscules/yoga.png'
import swimming from '../assets/iconForMuscules/swimming.png'
import warmUp from '../assets/iconForMuscules/warmUp.png'
import neck from '../assets/iconForMuscules/neck.png'




import press from '../assets/bodyMeasurements/press.png'
import legbiceps from '../assets/bodyMeasurements/legsbiceps.png'
import icri from '../assets/bodyMeasurements/icri.png'
import chest from '../assets/bodyMeasurements/chest.png'
import biceps from '../assets/bodyMeasurements/biceps.png'




export const measurements = [
    { id: 1,
       name: 'Грудь',
      newMeasurement:0,
    lastMeasurement:0,
     icon:chest,
      description: 'Измерение грудной клетки' 
    },
    { id: 2,
       name: 'Талия',
        newMeasurement:0,
    lastMeasurement:0,
     icon: press,
      description: 'Измерение талии' 
    },
    { id: 3,
       name: 'Бедра',
       newMeasurement:0,
    lastMeasurement:0,
     icon: legbiceps,
      description: 'Измерение бедер' 
    },
    { id: 4,
       name: 'Бицепс',
       newMeasurement:0,
    lastMeasurement:0,
     icon: biceps,
      description: 'Измерение бицепса'
     },
    { id: 5,
      name: 'Икры',
       newMeasurement:0,
    lastMeasurement:0, 
    icon: icri, 
    description: 'Измерение икры' }
  ]






export   const measurementInstructions = {
    'Грудь': 'Измеряйте грудную клетку на выдохе. Сантиметровая лента должна проходить по самым выступающим точкам груди и под лопатками, спереди - над грудными железами.',
    'Талия': 'Измеряйте талию на вдохе в самом узком месте. Лента должна быть строго горизонтально, не врезаться в кожу и не провисать.',
    'Бедра': 'Измеряйте бедра стоя, сантиметровая лента проходит по самым выступающим точкам ягодиц и лобка.',
    'Бицепс': 'Измеряйте бицепс в напряженном и расслабленном состоянии. Лента по самому широкому месту мышцы.',
    'Бедро': 'Измеряйте бедро стоя, ноги слегка расставлены. Лента по самой широкой части бедра, под ягодичной складкой.',
    'Икра': 'Измеряйте икру в самой широкой части, стоя на прямых ногах. Лента горизонтально.'
  }

export const userWaightChartsLabels=[ ]
  const userStartWeight=60
  const userGoalWeight=80
  export const userWeightStats=[ 
    {
id:1,
text:"Начальный",
userWeight:userStartWeight
  }, 
  {
id:2,
text:"Цель",
userWeight:userGoalWeight
  }, 
]
export const userWeightHistory=[
  {
    id:1,
    userWeightPoint:66,
    userWeightDate:"01.03",
  },
   {
    id:2,
    userWeightPoint:68,
    userWeightDate:"11.03",
  },
   {
    id:3,
    userWeightPoint:71,
    userWeightDate:"22.03",
  },
   {
    id:4,
    userWeightPoint:73,
    userWeightDate:"30.03",
  },
   {
    id:5,
    userWeightPoint:70,
    userWeightDate:"05.04",
  }
]
export const exerciseChartPeriodText=[
  {
    id:1,
    value:"30days",
    text:'30 дней'
  },
   {
    id:2,
    value:"3months",
    text:'3 месяца'
  },
   {
    id:3,
    value:"all_time",
    text:'За всё время'
  }
]

export const generateExerciseWeightHistory = () => {
  const allExercises = MuscleList.flatMap(muscle => muscle.exercises);
  const history = {};
  
  allExercises.forEach(exercise => {
    history[exercise] = [
      { id: 1, exerciseWeightPoint: getRandomInt(40, 100), exerciseWeightDate: `${getRandomInt(10,30)}.0${getRandomInt(1,9)}` },
      { id: 2, exerciseWeightPoint: getRandomInt(45, 110), exerciseWeightDate: `${getRandomInt(10,30)}.0${getRandomInt(1,9)}` },
      { id: 3, exerciseWeightPoint: getRandomInt(50, 120), exerciseWeightDate: `${getRandomInt(10,30)}.0${getRandomInt(1,9)}` },
      { id: 4, exerciseWeightPoint: getRandomInt(55, 130), exerciseWeightDate: `${getRandomInt(10,30)}.0${getRandomInt(1,9)}` },
      { id: 5, exerciseWeightPoint: getRandomInt(60, 140), exerciseWeightDate: `${getRandomInt(10,30)}.0${getRandomInt(1,9)}`}
    ];
  });
  
  return history;
};

export const daysOfWeek = [
    { id: 1, name: 'Понедельник' },
    { id: 2, name: 'Вторник' },
    { id: 3, name: 'Среда' },
    { id: 4, name: 'Четверг' },
    { id: 5, name: 'Пятница' },
    { id: 6, name: 'Суббота' },
    { id: 7, name: 'Воскресенье' }
  ]

  export const planTypes = [
    { id: 1, name: 'Сложная', icon: 'fas fa-fire', desc: 'Интенсивные тренировки' },
    { id: 2, name: 'Лёгкая', icon: 'fas fa-feather-alt', desc: 'Восстановительные' },
    { id: 3, name: 'Сплит', icon: 'fas fa-layer-group', desc: 'Раздельные тренировки' },
    { id: 4, name: 'Фулл Боди', icon: 'fas fa-user', desc: 'Все тело за раз' },
    { id: 5, name: 'Верх/Низ', icon: 'fas fa-arrows-up-down', desc: 'Разделение по зонам' },
    { id: 6, name: 'Тяни-Толкай-Ноги', icon: 'fas fa-fist-raised', desc: 'Push/Pull/Legs' }
  ]



export const  MuscleList=[
  {
    id:1,
nameOfMuscle:'Грудь',
exerciseCategory:"power",
icon:chestPng,
 exercises: [
    "Жим штанги лежа",
    "Жим гантелей лежа",
    "Жим на наклонной скамье (30°)",
    "Жим на наклонной скамье (45°)",
    "Разводка гантелей лежа",
    "Кроссовер на верхних блоках",
    "Сведение рук в баттерфляе",
    "Отжимания на брусьях",
    "Отжимания от пола",
    "Пуловер с гантелей",
    "Жим штанги лежа узким хватом",
    "Жим в тренажере Смита",
    "Разводка гантелей на наклонной",
    "Кроссовер на нижних блоках",
    "Пресс в тренажере для груди"
  ]
},
 {
  id:2,
nameOfMuscle:'Трицепс',
exerciseCategory:"power",
icon:triceps,
exercises: [
    "Французский жим штанги лежа",
    "Французский жим гантели сидя",
    "Разгибание рук на блоке вниз",
    "Разгибание рук с гантелью из-за головы",
    "Отжимания на брусьях",
    "Отжимания узким хватом от пола",
    "Жим штанги узким хватом",
    "Разгибание руки с гантелью в наклоне",
    "Разгибание рук на блоке обратным хватом",
    "Жим гантелей из-за головы сидя",
    "Отжимания на трицепс от скамьи",
    "Разгибание рук в тренажере",
    "Французский жим в кроссовере",
    "Алмазные отжимания",
    "Кикбэк с гантелью"
  ]
},

 {
  id:3,
nameOfMuscle:'Бицепс',
exerciseCategory:"power",
icon:bicepsPng,
 exercises: [
    "Подъем штанги на бицепс стоя",
    "Подъем гантелей на бицепс стоя",
    "Молотки с гантелями",
    "Подъем штанги на бицепс сидя",
    "Подъем гантелей на бицепс сидя",
    "Сгибание рук в тренажере Скотта",
    "Концентрированный подъем на бицепс",
    "Подъем штанги обратным хватом",
    "Сгибание рук на верхнем блоке",
    "Сгибание рук на нижнем блоке",
    "Подъем гантелей на бицепс лежа",
    "Кроссовер на бицепс стоя",
    "Молотки сидя",
    "Подъем штанги на бицепс в тренажере",
    "Сгибание рук с резиной"
  ]
},

 {
  id:4,
nameOfMuscle:'Спина',
exerciseCategory:"power",
icon:backPng,
 exercises: [
    "Подтягивания широким хватом",
    "Подтягивания обратным хватом",
    "Тяга штанги в наклоне",
    "Тяга гантели в наклоне",
    "Тяга верхнего блока к груди",
    "Тяга нижнего блока к поясу",
    "Горизонтальная тяга в тренажере",
    "Пуловер с гантелей",
    "Пуловер в кроссовере",
    "Тяга Т-грифа",
    "Гиперэкстензия",
    "Шраги со штангой",
    "Шраги с гантелями",
    "Тяга штанги в наклоне обратным хватом",
    "Подъем корпуса в гиперэкстензии"
  ]
},

 {
  id:5,
nameOfMuscle:'Плечи',
exerciseCategory:"power",
icon:shalderPng,
 exercises: [
    "Жим штанги стоя",
    "Жим гантелей сидя",
    "Жим Арнольда",
    "Разводка гантелей в стороны",
    "Разводка гантелей перед собой",
    "Тяга штанги к подбородку",
    "Обратные разведения в наклоне",
    "Жим штанги из-за головы",
    "Разведение рук в кроссовере",
    "Подъем гантелей перед собой",
    "Жим гантелей сидя (нейтральный хват)",
    "Тяга блока к лицу",
    "Разведение рук в тренажере",
    "Жим в тренажере Смита",
    "Подъем рук в стороны с резиной"
  ]
},

 {
  id:6,
nameOfMuscle:'Пресс',
exerciseCategory:"power",
icon:torsoPng,
 exercises: [
    "Скручивания на пресс",
    "Подъем ног в висе",
    "Планка",
    "Боковая планка",
    "Русский твист",
    "Обратные скручивания",
    "Велосипед",
    "Ножницы",
    "Подъем корпуса лежа",
    "Вакуум живота",
    "Скручивания на фитболе",
    "Подъем ног лежа",
    "Кранчи с весом",
    "Скручивания в тренажере",
    "Боковые наклоны с гантелей"
  ]
},
 {
  id:7,
nameOfMuscle:'Ноги',
exerciseCategory:"power",
icon:legPng,
 exercises: [
    "Приседания со штангой",
    "Приседания с гантелями",
    "Фронтальные приседания",
    "Жим ногами в тренажере",
    "Разгибание ног в тренажере",
    "Сгибание ног в тренажере",
    "Выпады со штангой",
    "Выпады с гантелями",
    "Болгарские сплит-приседания",
    "Румынская тяга",
    "Становая тяга",
    "Гиперэкстензия",
    "Подъем на носки стоя",
    "Подъем на носки сидя",
    "Зашагивания на платформу"
  ]
},

 {
  id:8,
nameOfMuscle:'Кардио',
exerciseCategory:"cardio",
icon:cardioPng,
 exercises: [
    "Бег на дорожке",
    "Бег на улице",
    "Велотренажер",
    "Эллипс",
    "Гребной тренажер",
    "Степпер",
    "Прыжки на скакалке",
    "Бурпи",
    "Джампинг Джек",
    "Ходьба в гору",
    "Сайкл",
    "Плавание",
    "Интервальный бег",
    "Бег с ускорениями",
    "Тенисный бокс"
  ]
},
 {
  id:9,
nameOfMuscle:'Бассейн',
exerciseCategory:"cardio",
icon:swimming,
  exercises: [
      "Кроль",
      "Брасс",
      "Баттерфляй",
      "На спине",
      "Плавание с доской",
      "Плавание с колобашкой",
      "Интервальное плавание",
      "Плавание в ластах",
      "Аквааэробика",
      "Ныряние в длину",
      "Плавание с грузом",
      "Техника дыхания",
      "Плавание на выносливость",
      "Спринт 50м",
      "Заплывы на время"
    ]
},

{
  id:10,
nameOfMuscle:'Йога',
exerciseCategory:"yoga",
icon:yoga,

  exercises: [
    "Собака мордой вниз",
    "Поза кошки-коровы",
    "Поза ребенка",
    "Поза дерева",
    "Поза воина 1",
    "Поза воина 2",
    "Поза треугольника",
    "Поза моста",
    "Поза саранчи",
    "Поза кобры",
    "Скручивание лежа",
    "Поза голубя",
    "Поза свечи",
    "Поза рыбы",
    "Шавасана"
  ]
   
},
 {
  id: 11,
  nameOfMuscle: 'Шея',
  exerciseCategory: "power",
  icon: neck,
  exercises: [
    "Сгибание шеи с блином лежа",
    "Разгибание шеи с блином лежа",
    "Сгибание шеи в тренажере",
    "Разгибание шеи в тренажере",
    "Боковые наклоны шеи с блином",
    "Боковые наклоны шеи в тренажере",
    "Сгибание шеи с резиной",
    "Разгибание шеи с резиной",
    "Боковые наклоны шеи с резиной",
    "Удержание блина на голове",
    "Круговые вращения головой",
    "Изометрическое напряжение шеи",
    "Сгибание шеи лежа на спине",
    "Разгибание шеи лежа на животе",
    "Боковые сгибания шеи стоя"
  ]
},
{
  id: 12,
  nameOfMuscle: 'Разминка',
  exerciseCategory: "warmup",
  icon: warmUp,
  exercises: [
    "Вращение головой",
    "Круговые движения плечами",
    "Махи руками",
    "Вращение кистями",
    "Наклоны корпуса",
    "Вращение тазом",
    "Махи ногами вперед",
    "Махи ногами в стороны",
    "Выпады без веса",
    "Приседания без веса",
    "Прыжки на месте",
    "Бег на месте",
    "Скручивания стоя",
    "Наклоны в стороны",
    "Растяжка всего тела"
  ]
}

]
//types of trainingPlan
export const exercisesDataHard = [
  {
    id: 1001,
    activeDayId: 1,
    exerciseName: "Приседания со штангой", // ✓ уже правильно
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 10011, reps: 12, weight: 60 },
      { id: 10012, reps: 10, weight: 70 },
      { id: 10013, reps: 8, weight: 80 },
      { id: 10014, reps: 6, weight: 90 }
    ],
    exerciseRepetitions: 36,
    exerciseWeight: 60,
    exerciseWeights: [60, 70, 80, 90],
    exerciseRepeatsArray: [12, 10, 8, 6]
  },
  {
    id: 1002,
    activeDayId: 1,
    exerciseName: "Жим штанги лежа", // было "Жим лежа"
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 10021, reps: 10, weight: 50 },
      { id: 10022, reps: 8, weight: 60 },
      { id: 10023, reps: 6, weight: 70 },
      { id: 10024, reps: 5, weight: 80 }
    ],
    exerciseRepetitions: 29,
    exerciseWeight: 50,
    exerciseWeights: [50, 60, 70, 80],
    exerciseRepeatsArray: [10, 8, 6, 5]
  },
  {
    id: 1003,
    activeDayId: 1,
    exerciseName: "Становая тяга", // ✓ уже правильно
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 10031, reps: 8, weight: 70 },
      { id: 10032, reps: 6, weight: 80 },
      { id: 10033, reps: 5, weight: 90 },
      { id: 10034, reps: 4, weight: 100 }
    ],
    exerciseRepetitions: 23,
    exerciseWeight: 70,
    exerciseWeights: [70, 80, 90, 100],
    exerciseRepeatsArray: [8, 6, 5, 4]
  },
  {
    id: 1004,
    activeDayId: 1,
    exerciseName: "Подтягивания широким хватом", // было "Подтягивания с весом"
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 10041, reps: 10, weight: 5 },
      { id: 10042, reps: 8, weight: 10 },
      { id: 10043, reps: 6, weight: 15 },
      { id: 10044, reps: 5, weight: 20 }
    ],
    exerciseRepetitions: 29,
    exerciseWeight: 5,
    exerciseWeights: [5, 10, 15, 20],
    exerciseRepeatsArray: [10, 8, 6, 5]
  },
  {
    id: 1005,
    activeDayId: 3,
    exerciseName: "Жим гантелей сидя", // ✓ уже правильно
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 10051, reps: 12, weight: 20 },
      { id: 10052, reps: 10, weight: 22 },
      { id: 10053, reps: 8, weight: 25 },
      { id: 10054, reps: 8, weight: 25 }
    ],
    exerciseRepetitions: 38,
    exerciseWeight: 20,
    exerciseWeights: [20, 22, 25, 25],
    exerciseRepeatsArray: [12, 10, 8, 8]
  },
  {
    id: 1006,
    activeDayId: 3,
    exerciseName: "Тяга штанги в наклоне", // ✓ уже правильно
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 10061, reps: 10, weight: 40 },
      { id: 10062, reps: 8, weight: 50 },
      { id: 10063, reps: 8, weight: 55 },
      { id: 10064, reps: 6, weight: 60 }
    ],
    exerciseRepetitions: 32,
    exerciseWeight: 40,
    exerciseWeights: [40, 50, 55, 60],
    exerciseRepeatsArray: [10, 8, 8, 6]
  },
  {
    id: 1007,
    activeDayId: 3,
    exerciseName: "Жим ногами в тренажере", // было "Жим ногами"
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 10071, reps: 12, weight: 100 },
      { id: 10072, reps: 10, weight: 120 },
      { id: 10073, reps: 8, weight: 140 },
      { id: 10074, reps: 8, weight: 150 }
    ],
    exerciseRepetitions: 38,
    exerciseWeight: 100,
    exerciseWeights: [100, 120, 140, 150],
    exerciseRepeatsArray: [12, 10, 8, 8]
  },
  {
    id: 1008,
    activeDayId: 3,
    exerciseName: "Отжимания на брусьях", // было "Отжимания на брусьях с весом"
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 10081, reps: 10, weight: 10 },
      { id: 10082, reps: 8, weight: 15 },
      { id: 10083, reps: 6, weight: 20 },
      { id: 10084, reps: 6, weight: 20 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 10,
    exerciseWeights: [10, 15, 20, 20],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 1009,
    activeDayId: 5,
    exerciseName: "Фронтальные приседания", // ✓ уже правильно
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 10091, reps: 8, weight: 50 },
      { id: 10092, reps: 6, weight: 60 },
      { id: 10093, reps: 5, weight: 70 },
      { id: 10094, reps: 4, weight: 80 }
    ],
    exerciseRepetitions: 23,
    exerciseWeight: 50,
    exerciseWeights: [50, 60, 70, 80],
    exerciseRepeatsArray: [8, 6, 5, 4]
  },
  {
    id: 1010,
    activeDayId: 5,
    exerciseName: "Жим штанги стоя", // ✓ уже правильно
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 10101, reps: 8, weight: 30 },
      { id: 10102, reps: 6, weight: 35 },
      { id: 10103, reps: 6, weight: 40 },
      { id: 10104, reps: 5, weight: 45 }
    ],
    exerciseRepetitions: 25,
    exerciseWeight: 30,
    exerciseWeights: [30, 35, 40, 45],
    exerciseRepeatsArray: [8, 6, 6, 5]
  },
  {
    id: 1011,
    activeDayId: 5,
    exerciseName: "Румынская тяга", // ✓ уже правильно
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 10111, reps: 10, weight: 50 },
      { id: 10112, reps: 8, weight: 60 },
      { id: 10113, reps: 6, weight: 70 },
      { id: 10114, reps: 6, weight: 75 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 50,
    exerciseWeights: [50, 60, 70, 75],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 1012,
    activeDayId: 5,
    exerciseName: "Тяга верхнего блока к груди", // было "Тяга верхнего блока"
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 10121, reps: 12, weight: 40 },
      { id: 10122, reps: 10, weight: 50 },
      { id: 10123, reps: 8, weight: 60 },
      { id: 10124, reps: 8, weight: 65 }
    ],
    exerciseRepetitions: 38,
    exerciseWeight: 40,
    exerciseWeights: [40, 50, 60, 65],
    exerciseRepeatsArray: [12, 10, 8, 8]
  },
  {
    id: 1013,
    activeDayId: 7,
    exerciseName: "Болгарские сплит-приседания", // ✓ уже правильно
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 10131, reps: 12, weight: 20 },
      { id: 10132, reps: 10, weight: 25 },
      { id: 10133, reps: 8, weight: 30 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 20,
    exerciseWeights: [20, 25, 30],
    exerciseRepeatsArray: [12, 10, 8]
  },
  {
    id: 1014,
    activeDayId: 7,
    exerciseName: "Жим гантелей лежа", // ✓ уже правильно
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 10141, reps: 10, weight: 25 },
      { id: 10142, reps: 8, weight: 30 },
      { id: 10143, reps: 8, weight: 35 },
      { id: 10144, reps: 6, weight: 40 }
    ],
    exerciseRepetitions: 32,
    exerciseWeight: 25,
    exerciseWeights: [25, 30, 35, 40],
    exerciseRepeatsArray: [10, 8, 8, 6]
  },
  {
    id: 1015,
    activeDayId: 7,
    exerciseName: "Гиперэкстензия", // было "Гиперэкстензия с весом"
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 10151, reps: 15, weight: 10 },
      { id: 10152, reps: 12, weight: 15 },
      { id: 10153, reps: 10, weight: 20 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 10,
    exerciseWeights: [10, 15, 20],
    exerciseRepeatsArray: [15, 12, 10]
  },
  {
    id: 1016,
    activeDayId: 7,
    exerciseName: "Разводка гантелей в стороны", // было "Махи гантелями в стороны"
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 10161, reps: 15, weight: 8 },
      { id: 10162, reps: 12, weight: 10 },
      { id: 10163, reps: 10, weight: 12 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 8,
    exerciseWeights: [8, 10, 12],
    exerciseRepeatsArray: [15, 12, 10]
  },
]
export const exercisesDataLight = [
  {
    id: 2001,
    activeDayId: 1,
    exerciseName: "Приседания со штангой",
    exerciseRepeats: 3, 
    exerciseApproaches: [
      { id: 20011, reps: 12, weight: 45 },
      { id: 20012, reps: 12, weight: 50 },
      { id: 20013, reps: 12, weight: 55 }
    ],
    exerciseWeights: [45, 50, 55],
    exerciseRepeatsArray: [12, 12, 12]
  },
  {
    id: 2002,
    activeDayId: 1,
    exerciseName: "Жим штанги лежа",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 20021, reps: 12, weight: 40 },
      { id: 20022, reps: 10, weight: 45 },
      { id: 20023, reps: 10, weight: 50 }
    ],
    exerciseWeights: [40, 45, 50],
    exerciseRepeatsArray: [12, 10, 10]
  },
  {
    id: 2003,
    activeDayId: 1,
    exerciseName: "Становая тяга",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 20031, reps: 10, weight: 50 },
      { id: 20032, reps: 10, weight: 60 },
      { id: 20033, reps: 10, weight: 65 }
    ],
    exerciseWeights: [50, 60, 65],
    exerciseRepeatsArray: [10, 10, 10]
  },
  {
    id: 2004,
    activeDayId: 1,
    exerciseName: "Подтягивания широким хватом",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 20041, reps: 10, weight: 0 },
      { id: 20042, reps: 10, weight: 0 },
      { id: 20043, reps: 10, weight: 0 }
    ],
    exerciseWeights: [0, 0, 0],
    exerciseRepeatsArray: [10, 10, 10]
  },
  {
    id: 2005,
    activeDayId: 3,
    exerciseName: "Жим гантелей сидя",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 20051, reps: 12, weight: 15 },
      { id: 20052, reps: 12, weight: 15 },
      { id: 20053, reps: 12, weight: 17 }
    ],
    exerciseWeights: [15, 15, 17],
    exerciseRepeatsArray: [12, 12, 12]
  },
  {
    id: 2006,
    activeDayId: 3,
    exerciseName: "Тяга штанги в наклоне",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 20061, reps: 12, weight: 30 },
      { id: 20062, reps: 12, weight: 35 },
      { id: 20063, reps: 12, weight: 35 }
    ],
    exerciseWeights: [30, 35, 35],
    exerciseRepeatsArray: [12, 12, 12]
  },
  {
    id: 2007,
    activeDayId: 3,
    exerciseName: "Жим ногами в тренажере",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 20071, reps: 15, weight: 70 },
      { id: 20072, reps: 15, weight: 80 },
      { id: 20073, reps: 15, weight: 90 }
    ],
    exerciseWeights: [70, 80, 90],
    exerciseRepeatsArray: [15, 15, 15]
  },
  {
    id: 2008,
    activeDayId: 3,
    exerciseName: "Отжимания на брусьях",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 20081, reps: 10, weight: 0 },
      { id: 20082, reps: 10, weight: 0 },
      { id: 20083, reps: 10, weight: 0 }
    ],
    exerciseWeights: [0, 0, 0],
    exerciseRepeatsArray: [10, 10, 10]
  },
  {
    id: 2009,
    activeDayId: 5,
    exerciseName: "Фронтальные приседания",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 20091, reps: 10, weight: 35 },
      { id: 20092, reps: 10, weight: 40 },
      { id: 20093, reps: 10, weight: 45 }
    ],
    exerciseWeights: [35, 40, 45],
    exerciseRepeatsArray: [10, 10, 10]
  },
  {
    id: 2010,
    activeDayId: 5,
    exerciseName: "Жим штанги стоя",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 20101, reps: 10, weight: 20 },
      { id: 20102, reps: 10, weight: 25 },
      { id: 20103, reps: 10, weight: 25 }
    ],
    exerciseWeights: [20, 25, 25],
    exerciseRepeatsArray: [10, 10, 10]
  },
  {
    id: 2011,
    activeDayId: 5,
    exerciseName: "Румынская тяга",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 20111, reps: 12, weight: 40 },
      { id: 20112, reps: 12, weight: 45 },
      { id: 20113, reps: 12, weight: 45 }
    ],
    exerciseWeights: [40, 45, 45],
    exerciseRepeatsArray: [12, 12, 12]
  },
  {
    id: 2012,
    activeDayId: 5,
    exerciseName: "Тяга верхнего блока к груди",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 20121, reps: 12, weight: 30 },
      { id: 20122, reps: 12, weight: 35 },
      { id: 20123, reps: 12, weight: 40 }
    ],
    exerciseWeights: [30, 35, 40],
    exerciseRepeatsArray: [12, 12, 12]
  }
];
export const exercisesDataSplit = [

  {
    id: 3001,
    activeDayId: 1,
    exerciseName: "Жим штанги лежа",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 30011, reps: 12, weight: 40 },
      { id: 30012, reps: 10, weight: 50 },
      { id: 30013, reps: 8, weight: 55 },
      { id: 30014, reps: 8, weight: 55 }
    ],
    exerciseRepetitions: 38,
    exerciseWeight: 40,
    exerciseWeights: [40, 50, 55, 55],
    exerciseRepeatsArray: [12, 10, 8, 8]
  },
  {
    id: 3002,
    activeDayId: 1,
    exerciseName: "Жим гантелей на наклонной",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 30021, reps: 12, weight: 15 },
      { id: 30022, reps: 10, weight: 17 },
      { id: 30023, reps: 10, weight: 17 }
    ],
    exerciseRepetitions: 32,
    exerciseWeight: 15,
    exerciseWeights: [15, 17, 17],
    exerciseRepeatsArray: [12, 10, 10]
  },
  {
    id: 3003,
    activeDayId: 1,
    exerciseName: "Сведение рук в кроссовере",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 30031, reps: 15, weight: 10 },
      { id: 30032, reps: 12, weight: 12 },
      { id: 30033, reps: 10, weight: 12 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 10,
    exerciseWeights: [10, 12, 12],
    exerciseRepeatsArray: [15, 12, 10]
  },
  {
    id: 3004,
    activeDayId: 1,
    exerciseName: "Французский жим лежа",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 30041, reps: 12, weight: 20 },
      { id: 30042, reps: 10, weight: 22 },
      { id: 30043, reps: 8, weight: 22 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 20,
    exerciseWeights: [20, 22, 22],
    exerciseRepeatsArray: [12, 10, 8]
  },
  {
    id: 3005,
    activeDayId: 1,
    exerciseName: "Разгибание рук на блоке",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 30051, reps: 15, weight: 15 },
      { id: 30052, reps: 12, weight: 17 },
      { id: 30053, reps: 10, weight: 17 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 15,
    exerciseWeights: [15, 17, 17],
    exerciseRepeatsArray: [15, 12, 10]
  },

  // === ДЕНЬ 2: СПИНА + БИЦЕПС ===
  {
    id: 3006,
    activeDayId: 3,
    exerciseName: "Подтягивания широким хватом",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 30061, reps: 10, weight: 0 },
      { id: 30062, reps: 8, weight: 0 },
      { id: 30063, reps: 6, weight: 0 },
      { id: 30064, reps: 6, weight: 0 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 0,
    exerciseWeights: [0, 0, 0, 0],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 3007,
    activeDayId: 3,
    exerciseName: "Тяга штанги в наклоне",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 30071, reps: 10, weight: 30 },
      { id: 30072, reps: 8, weight: 35 },
      { id: 30073, reps: 8, weight: 40 },
      { id: 30074, reps: 6, weight: 40 }
    ],
    exerciseRepetitions: 32,
    exerciseWeight: 30,
    exerciseWeights: [30, 35, 40, 40],
    exerciseRepeatsArray: [10, 8, 8, 6]
  },
  {
    id: 3008,
    activeDayId: 3,
    exerciseName: "Тяга верхнего блока к груди",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 30081, reps: 12, weight: 35 },
      { id: 30082, reps: 10, weight: 40 },
      { id: 30083, reps: 10, weight: 45 }
    ],
    exerciseRepetitions: 32,
    exerciseWeight: 35,
    exerciseWeights: [35, 40, 45],
    exerciseRepeatsArray: [12, 10, 10]
  },
  {
    id: 3009,
    activeDayId: 3,
    exerciseName: "Подъем штанги на бицепс",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 30091, reps: 12, weight: 20 },
      { id: 30092, reps: 10, weight: 22 },
      { id: 30093, reps: 8, weight: 22 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 20,
    exerciseWeights: [20, 22, 22],
    exerciseRepeatsArray: [12, 10, 8]
  },
  {
    id: 3010,
    activeDayId: 3,
    exerciseName: "Молотки с гантелями",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 30101, reps: 12, weight: 10 },
      { id: 30102, reps: 10, weight: 12 },
      { id: 30103, reps: 10, weight: 12 }
    ],
    exerciseRepetitions: 32,
    exerciseWeight: 10,
    exerciseWeights: [10, 12, 12],
    exerciseRepeatsArray: [12, 10, 10]
  },

  // === ДЕНЬ 3: НОГИ + ПЛЕЧИ ===
  {
    id: 3011,
    activeDayId: 5,
    exerciseName: "Приседания со штангой",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 30111, reps: 10, weight: 50 },
      { id: 30112, reps: 8, weight: 60 },
      { id: 30113, reps: 6, weight: 70 },
      { id: 30114, reps: 6, weight: 70 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 50,
    exerciseWeights: [50, 60, 70, 70],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 3012,
    activeDayId: 5,
    exerciseName: "Румынская тяга",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 30121, reps: 12, weight: 40 },
      { id: 30122, reps: 10, weight: 50 },
      { id: 30123, reps: 8, weight: 55 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 40,
    exerciseWeights: [40, 50, 55],
    exerciseRepeatsArray: [12, 10, 8]
  },
  {
    id: 3013,
    activeDayId: 5,
    exerciseName: "Жим ногами в тренажере",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 30131, reps: 15, weight: 80 },
      { id: 30132, reps: 12, weight: 90 },
      { id: 30133, reps: 12, weight: 100 }
    ],
    exerciseRepetitions: 39,
    exerciseWeight: 80,
    exerciseWeights: [80, 90, 100],
    exerciseRepeatsArray: [15, 12, 12]
  },
  {
    id: 3014,
    activeDayId: 5,
    exerciseName: "Жим гантелей сидя",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 30141, reps: 12, weight: 12 },
      { id: 30142, reps: 10, weight: 14 },
      { id: 30143, reps: 8, weight: 14 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 12,
    exerciseWeights: [12, 14, 14],
    exerciseRepeatsArray: [12, 10, 8]
  },
  {
    id: 3015,
    activeDayId: 5,
    exerciseName: "Разводка гантелей в стороны",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 30151, reps: 15, weight: 6 },
      { id: 30152, reps: 12, weight: 8 },
      { id: 30153, reps: 10, weight: 8 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 6,
    exerciseWeights: [6, 8, 8],
    exerciseRepeatsArray: [15, 12, 10]
  }
];
export const exercisesDataFullBody = [

  {
    id: 4001,
    activeDayId: 1,
    exerciseName: "Приседания со штангой",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40011, reps: 10, weight: 50 },
      { id: 40012, reps: 8, weight: 60 },
      { id: 40013, reps: 8, weight: 65 }
    ],
    exerciseRepetitions: 26,
    exerciseWeight: 50,
    exerciseWeights: [50, 60, 65],
    exerciseRepeatsArray: [10, 8, 8]
  },
  {
    id: 4002,
    activeDayId: 1,
    exerciseName: "Жим штанги лежа",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40021, reps: 10, weight: 40 },
      { id: 40022, reps: 8, weight: 45 },
      { id: 40023, reps: 8, weight: 50 }
    ],
    exerciseRepetitions: 26,
    exerciseWeight: 40,
    exerciseWeights: [40, 45, 50],
    exerciseRepeatsArray: [10, 8, 8]
  },
  {
    id: 4003,
    activeDayId: 1,
    exerciseName: "Тяга штанги в наклоне",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40031, reps: 10, weight: 35 },
      { id: 40032, reps: 8, weight: 40 },
      { id: 40033, reps: 8, weight: 45 }
    ],
    exerciseRepetitions: 26,
    exerciseWeight: 35,
    exerciseWeights: [35, 40, 45],
    exerciseRepeatsArray: [10, 8, 8]
  },
  {
    id: 4004,
    activeDayId: 1,
    exerciseName: "Жим гантелей сидя",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40041, reps: 12, weight: 12 },
      { id: 40042, reps: 10, weight: 14 },
      { id: 40043, reps: 8, weight: 14 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 12,
    exerciseWeights: [12, 14, 14],
    exerciseRepeatsArray: [12, 10, 8]
  },
  {
    id: 4005,
    activeDayId: 1,
    exerciseName: "Подъем штанги на бицепс",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40051, reps: 12, weight: 20 },
      { id: 40052, reps: 10, weight: 22 },
      { id: 40053, reps: 8, weight: 22 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 20,
    exerciseWeights: [20, 22, 22],
    exerciseRepeatsArray: [12, 10, 8]
  },
  {
    id: 4006,
    activeDayId: 1,
    exerciseName: "Французский жим лежа",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40061, reps: 12, weight: 20 },
      { id: 40062, reps: 10, weight: 22 },
      { id: 40063, reps: 8, weight: 22 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 20,
    exerciseWeights: [20, 22, 22],
    exerciseRepeatsArray: [12, 10, 8]
  },

  // === ДЕНЬ 2 ===
  {
    id: 4007,
    activeDayId: 3,
    exerciseName: "Становая тяга",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40071, reps: 8, weight: 60 },
      { id: 40072, reps: 6, weight: 70 },
      { id: 40073, reps: 6, weight: 75 }
    ],
    exerciseRepetitions: 20,
    exerciseWeight: 60,
    exerciseWeights: [60, 70, 75],
    exerciseRepeatsArray: [8, 6, 6]
  },
  {
    id: 4008,
    activeDayId: 3,
    exerciseName: "Жим ногами в тренажере",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40081, reps: 12, weight: 80 },
      { id: 40082, reps: 10, weight: 90 },
      { id: 40083, reps: 10, weight: 100 }
    ],
    exerciseRepetitions: 32,
    exerciseWeight: 80,
    exerciseWeights: [80, 90, 100],
    exerciseRepeatsArray: [12, 10, 10]
  },
  {
    id: 4009,
    activeDayId: 3,
    exerciseName: "Отжимания на брусьях",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40091, reps: 10, weight: 0 },
      { id: 40092, reps: 8, weight: 0 },
      { id: 40093, reps: 8, weight: 0 }
    ],
    exerciseRepetitions: 26,
    exerciseWeight: 0,
    exerciseWeights: [0, 0, 0],
    exerciseRepeatsArray: [10, 8, 8]
  },
  {
    id: 4010,
    activeDayId: 3,
    exerciseName: "Подтягивания широким хватом",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40101, reps: 8, weight: 0 },
      { id: 40102, reps: 6, weight: 0 },
      { id: 40103, reps: 6, weight: 0 }
    ],
    exerciseRepetitions: 20,
    exerciseWeight: 0,
    exerciseWeights: [0, 0, 0],
    exerciseRepeatsArray: [8, 6, 6]
  },
  {
    id: 4011,
    activeDayId: 3,
    exerciseName: "Разводка гантелей в стороны",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40111, reps: 15, weight: 6 },
      { id: 40112, reps: 12, weight: 8 },
      { id: 40113, reps: 10, weight: 8 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 6,
    exerciseWeights: [6, 8, 8],
    exerciseRepeatsArray: [15, 12, 10]
  },
  {
    id: 4012,
    activeDayId: 3,
    exerciseName: "Скручивания на пресс",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40121, reps: 20, weight: 0 },
      { id: 40122, reps: 15, weight: 0 },
      { id: 40123, reps: 15, weight: 0 }
    ],
    exerciseRepetitions: 50,
    exerciseWeight: 0,
    exerciseWeights: [0, 0, 0],
    exerciseRepeatsArray: [20, 15, 15]
  },

  // === ДЕНЬ 3 ===
  {
    id: 4013,
    activeDayId: 5,
    exerciseName: "Румынская тяга",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40131, reps: 10, weight: 45 },
      { id: 40132, reps: 8, weight: 55 },
      { id: 40133, reps: 8, weight: 60 }
    ],
    exerciseRepetitions: 26,
    exerciseWeight: 45,
    exerciseWeights: [45, 55, 60],
    exerciseRepeatsArray: [10, 8, 8]
  },
  {
    id: 4014,
    activeDayId: 5,
    exerciseName: "Жим гантелей лежа",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40141, reps: 10, weight: 20 },
      { id: 40142, reps: 8, weight: 25 },
      { id: 40143, reps: 8, weight: 27 }
    ],
    exerciseRepetitions: 26,
    exerciseWeight: 20,
    exerciseWeights: [20, 25, 27],
    exerciseRepeatsArray: [10, 8, 8]
  },
  {
    id: 4015,
    activeDayId: 5,
    exerciseName: "Тяга верхнего блока к груди",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40151, reps: 12, weight: 35 },
      { id: 40152, reps: 10, weight: 40 },
      { id: 40153, reps: 10, weight: 45 }
    ],
    exerciseRepetitions: 32,
    exerciseWeight: 35,
    exerciseWeights: [35, 40, 45],
    exerciseRepeatsArray: [12, 10, 10]
  },
  {
    id: 4016,
    activeDayId: 5,
    exerciseName: "Молотки с гантелями",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40161, reps: 12, weight: 10 },
      { id: 40162, reps: 10, weight: 12 },
      { id: 40163, reps: 10, weight: 12 }
    ],
    exerciseRepetitions: 32,
    exerciseWeight: 10,
    exerciseWeights: [10, 12, 12],
    exerciseRepeatsArray: [12, 10, 10]
  },
  {
    id: 4017,
    activeDayId: 5,
    exerciseName: "Разгибание рук на блоке",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40171, reps: 15, weight: 15 },
      { id: 40172, reps: 12, weight: 17 },
      { id: 40173, reps: 10, weight: 17 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 15,
    exerciseWeights: [15, 17, 17],
    exerciseRepeatsArray: [15, 12, 10]
  },
  {
    id: 4018,
    activeDayId: 5,
    exerciseName: "Подъем ног в висе",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 40181, reps: 15, weight: 0 },
      { id: 40182, reps: 12, weight: 0 },
      { id: 40183, reps: 10, weight: 0 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 0,
    exerciseWeights: [0, 0, 0],
    exerciseRepeatsArray: [15, 12, 10]
  }
];
export const exercisesDataPushPullLegs = [
  // === ДЕНЬ 1: ТОЛКАЙ (ГРУДЬ + ПЛЕЧИ + ТРИЦЕПС) ===
  {
    id: 5001,
    activeDayId: 1,
    exerciseName: "Жим штанги лежа",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 50011, reps: 10, weight: 50 },
      { id: 50012, reps: 8, weight: 60 },
      { id: 50013, reps: 6, weight: 70 },
      { id: 50014, reps: 6, weight: 75 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 50,
    exerciseWeights: [50, 60, 70, 75],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 5002,
    activeDayId: 1,
    exerciseName: "Жим гантелей на наклонной",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 50021, reps: 12, weight: 20 },
      { id: 50022, reps: 10, weight: 22 },
      { id: 50023, reps: 8, weight: 25 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 20,
    exerciseWeights: [20, 22, 25],
    exerciseRepeatsArray: [12, 10, 8]
  },
  {
    id: 5003,
    activeDayId: 1,
    exerciseName: "Жим штанги стоя",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 50031, reps: 10, weight: 30 },
      { id: 50032, reps: 8, weight: 35 },
      { id: 50033, reps: 6, weight: 40 },
      { id: 50034, reps: 6, weight: 40 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 30,
    exerciseWeights: [30, 35, 40, 40],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 5004,
    activeDayId: 1,
    exerciseName: "Разводка гантелей в стороны",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 50041, reps: 15, weight: 8 },
      { id: 50042, reps: 12, weight: 10 },
      { id: 50043, reps: 10, weight: 10 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 8,
    exerciseWeights: [8, 10, 10],
    exerciseRepeatsArray: [15, 12, 10]
  },
  {
    id: 5005,
    activeDayId: 1,
    exerciseName: "Французский жим лежа",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 50051, reps: 12, weight: 25 },
      { id: 50052, reps: 10, weight: 27 },
      { id: 50053, reps: 8, weight: 30 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 25,
    exerciseWeights: [25, 27, 30],
    exerciseRepeatsArray: [12, 10, 8]
  },
  {
    id: 5006,
    activeDayId: 1,
    exerciseName: "Разгибание рук на блоке",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 50061, reps: 15, weight: 20 },
      { id: 50062, reps: 12, weight: 22 },
      { id: 50063, reps: 10, weight: 25 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 20,
    exerciseWeights: [20, 22, 25],
    exerciseRepeatsArray: [15, 12, 10]
  },

  // === ДЕНЬ 2: ТЯНИ (СПИНА + БИЦЕПС) ===
  {
    id: 5007,
    activeDayId: 3,
    exerciseName: "Подтягивания широким хватом",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 50071, reps: 10, weight: 0 },
      { id: 50072, reps: 8, weight: 0 },
      { id: 50073, reps: 6, weight: 0 },
      { id: 50074, reps: 6, weight: 0 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 0,
    exerciseWeights: [0, 0, 0, 0],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 5008,
    activeDayId: 3,
    exerciseName: "Тяга штанги в наклоне",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 50081, reps: 10, weight: 40 },
      { id: 50082, reps: 8, weight: 50 },
      { id: 50083, reps: 6, weight: 60 },
      { id: 50084, reps: 6, weight: 65 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 40,
    exerciseWeights: [40, 50, 60, 65],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 5009,
    activeDayId: 3,
    exerciseName: "Тяга верхнего блока к груди",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 50091, reps: 12, weight: 45 },
      { id: 50092, reps: 10, weight: 50 },
      { id: 50093, reps: 8, weight: 55 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 45,
    exerciseWeights: [45, 50, 55],
    exerciseRepeatsArray: [12, 10, 8]
  },
  {
    id: 5010,
    activeDayId: 3,
    exerciseName: "Тяга гантели в наклоне",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 50101, reps: 12, weight: 20 },
      { id: 50102, reps: 10, weight: 22 },
      { id: 50103, reps: 10, weight: 25 }
    ],
    exerciseRepetitions: 32,
    exerciseWeight: 20,
    exerciseWeights: [20, 22, 25],
    exerciseRepeatsArray: [12, 10, 10]
  },
  {
    id: 5011,
    activeDayId: 3,
    exerciseName: "Подъем штанги на бицепс",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 50111, reps: 12, weight: 25 },
      { id: 50112, reps: 10, weight: 27 },
      { id: 50113, reps: 8, weight: 30 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 25,
    exerciseWeights: [25, 27, 30],
    exerciseRepeatsArray: [12, 10, 8]
  },
  {
    id: 5012,
    activeDayId: 3,
    exerciseName: "Молотки с гантелями",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 50121, reps: 12, weight: 12 },
      { id: 50122, reps: 10, weight: 14 },
      { id: 50123, reps: 10, weight: 14 }
    ],
    exerciseRepetitions: 32,
    exerciseWeight: 12,
    exerciseWeights: [12, 14, 14],
    exerciseRepeatsArray: [12, 10, 10]
  },

  // === ДЕНЬ 3: НОГИ ===
  {
    id: 5013,
    activeDayId: 5,
    exerciseName: "Приседания со штангой",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 50131, reps: 10, weight: 60 },
      { id: 50132, reps: 8, weight: 70 },
      { id: 50133, reps: 6, weight: 80 },
      { id: 50134, reps: 6, weight: 85 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 60,
    exerciseWeights: [60, 70, 80, 85],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 5014,
    activeDayId: 5,
    exerciseName: "Румынская тяга",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 50141, reps: 10, weight: 50 },
      { id: 50142, reps: 8, weight: 60 },
      { id: 50143, reps: 6, weight: 70 },
      { id: 50144, reps: 6, weight: 75 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 50,
    exerciseWeights: [50, 60, 70, 75],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 5015,
    activeDayId: 5,
    exerciseName: "Жим ногами в тренажере",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 50151, reps: 15, weight: 100 },
      { id: 50152, reps: 12, weight: 120 },
      { id: 50153, reps: 10, weight: 140 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 100,
    exerciseWeights: [100, 120, 140],
    exerciseRepeatsArray: [15, 12, 10]
  },
  {
    id: 5016,
    activeDayId: 5,
    exerciseName: "Разгибание ног в тренажере",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 50161, reps: 15, weight: 30 },
      { id: 50162, reps: 12, weight: 35 },
      { id: 50163, reps: 12, weight: 40 }
    ],
    exerciseRepetitions: 39,
    exerciseWeight: 30,
    exerciseWeights: [30, 35, 40],
    exerciseRepeatsArray: [15, 12, 12]
  },
  {
    id: 5017,
    activeDayId: 5,
    exerciseName: "Сгибание ног в тренажере",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 50171, reps: 15, weight: 25 },
      { id: 50172, reps: 12, weight: 30 },
      { id: 50173, reps: 12, weight: 35 }
    ],
    exerciseRepetitions: 39,
    exerciseWeight: 25,
    exerciseWeights: [25, 30, 35],
    exerciseRepeatsArray: [15, 12, 12]
  },
  {
    id: 5018,
    activeDayId: 5,
    exerciseName: "Подъем на носки стоя",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 50181, reps: 20, weight: 60 },
      { id: 50182, reps: 18, weight: 70 },
      { id: 50183, reps: 15, weight: 80 },
      { id: 50184, reps: 15, weight: 80 }
    ],
    exerciseRepetitions: 68,
    exerciseWeight: 60,
    exerciseWeights: [60, 70, 80, 80],
    exerciseRepeatsArray: [20, 18, 15, 15]
  }
];
export const exercisesDataUpperLower = [

  {
    id: 6001,
    activeDayId: 1,
    exerciseName: "Жим штанги лежа",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 60011, reps: 10, weight: 50 },
      { id: 60012, reps: 8, weight: 60 },
      { id: 60013, reps: 6, weight: 70 },
      { id: 60014, reps: 6, weight: 75 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 50,
    exerciseWeights: [50, 60, 70, 75],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 6002,
    activeDayId: 1,
    exerciseName: "Подтягивания широким хватом",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 60021, reps: 10, weight: 0 },
      { id: 60022, reps: 8, weight: 0 },
      { id: 60023, reps: 6, weight: 0 },
      { id: 60024, reps: 6, weight: 0 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 0,
    exerciseWeights: [0, 0, 0, 0],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 6003,
    activeDayId: 1,
    exerciseName: "Жим штанги стоя",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 60031, reps: 10, weight: 30 },
      { id: 60032, reps: 8, weight: 35 },
      { id: 60033, reps: 6, weight: 40 },
      { id: 60034, reps: 6, weight: 40 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 30,
    exerciseWeights: [30, 35, 40, 40],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 6004,
    activeDayId: 1,
    exerciseName: "Тяга штанги в наклоне",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 60041, reps: 10, weight: 40 },
      { id: 60042, reps: 8, weight: 50 },
      { id: 60043, reps: 6, weight: 60 },
      { id: 60044, reps: 6, weight: 65 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 40,
    exerciseWeights: [40, 50, 60, 65],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 6005,
    activeDayId: 1,
    exerciseName: "Подъем штанги на бицепс",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60051, reps: 12, weight: 25 },
      { id: 60052, reps: 10, weight: 27 },
      { id: 60053, reps: 8, weight: 30 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 25,
    exerciseWeights: [25, 27, 30],
    exerciseRepeatsArray: [12, 10, 8]
  },
  {
    id: 6006,
    activeDayId: 1,
    exerciseName: "Французский жим лежа",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60061, reps: 12, weight: 25 },
      { id: 60062, reps: 10, weight: 27 },
      { id: 60063, reps: 8, weight: 30 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 25,
    exerciseWeights: [25, 27, 30],
    exerciseRepeatsArray: [12, 10, 8]
  },
  {
    id: 6007,
    activeDayId: 1,
    exerciseName: "Разводка гантелей в стороны",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60071, reps: 15, weight: 8 },
      { id: 60072, reps: 12, weight: 10 },
      { id: 60073, reps: 10, weight: 10 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 8,
    exerciseWeights: [8, 10, 10],
    exerciseRepeatsArray: [15, 12, 10]
  },

  // === ДЕНЬ 2: НИЗ (НОГИ + ПРЕСС) ===
  {
    id: 6008,
    activeDayId: 3,
    exerciseName: "Приседания со штангой",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 60081, reps: 10, weight: 60 },
      { id: 60082, reps: 8, weight: 70 },
      { id: 60083, reps: 6, weight: 80 },
      { id: 60084, reps: 6, weight: 85 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 60,
    exerciseWeights: [60, 70, 80, 85],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 6009,
    activeDayId: 3,
    exerciseName: "Румынская тяга",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 60091, reps: 10, weight: 50 },
      { id: 60092, reps: 8, weight: 60 },
      { id: 60093, reps: 6, weight: 70 },
      { id: 60094, reps: 6, weight: 75 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 50,
    exerciseWeights: [50, 60, 70, 75],
    exerciseRepeatsArray: [10, 8, 6, 6]
  },
  {
    id: 6010,
    activeDayId: 3,
    exerciseName: "Жим ногами в тренажере",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60101, reps: 15, weight: 100 },
      { id: 60102, reps: 12, weight: 120 },
      { id: 60103, reps: 10, weight: 140 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 100,
    exerciseWeights: [100, 120, 140],
    exerciseRepeatsArray: [15, 12, 10]
  },
  {
    id: 6011,
    activeDayId: 3,
    exerciseName: "Выпады с гантелями",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60111, reps: 12, weight: 15 },
      { id: 60112, reps: 10, weight: 17 },
      { id: 60113, reps: 10, weight: 17 }
    ],
    exerciseRepetitions: 32,
    exerciseWeight: 15,
    exerciseWeights: [15, 17, 17],
    exerciseRepeatsArray: [12, 10, 10]
  },
  {
    id: 6012,
    activeDayId: 3,
    exerciseName: "Подъем на носки стоя",
    exerciseRepeats: 4,
    exerciseApproaches: [
      { id: 60121, reps: 20, weight: 60 },
      { id: 60122, reps: 18, weight: 70 },
      { id: 60123, reps: 15, weight: 80 },
      { id: 60124, reps: 15, weight: 80 }
    ],
    exerciseRepetitions: 68,
    exerciseWeight: 60,
    exerciseWeights: [60, 70, 80, 80],
    exerciseRepeatsArray: [20, 18, 15, 15]
  },
  {
    id: 6013,
    activeDayId: 3,
    exerciseName: "Скручивания на пресс",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60131, reps: 20, weight: 0 },
      { id: 60132, reps: 15, weight: 0 },
      { id: 60133, reps: 15, weight: 0 }
    ],
    exerciseRepetitions: 50,
    exerciseWeight: 0,
    exerciseWeights: [0, 0, 0],
    exerciseRepeatsArray: [20, 15, 15]
  },
  {
    id: 6014,
    activeDayId: 3,
    exerciseName: "Подъем ног в висе",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60141, reps: 15, weight: 0 },
      { id: 60142, reps: 12, weight: 0 },
      { id: 60143, reps: 10, weight: 0 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 0,
    exerciseWeights: [0, 0, 0],
    exerciseRepeatsArray: [15, 12, 10]
  },

  // === ДЕНЬ 3: ВЕРХ (ЛЕГКИЙ) ===
  {
    id: 6015,
    activeDayId: 5,
    exerciseName: "Жим гантелей лежа",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60151, reps: 12, weight: 20 },
      { id: 60152, reps: 10, weight: 22 },
      { id: 60153, reps: 8, weight: 25 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 20,
    exerciseWeights: [20, 22, 25],
    exerciseRepeatsArray: [12, 10, 8]
  },
  {
    id: 6016,
    activeDayId: 5,
    exerciseName: "Тяга верхнего блока к груди",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60161, reps: 12, weight: 45 },
      { id: 60162, reps: 10, weight: 50 },
      { id: 60163, reps: 8, weight: 55 }
    ],
    exerciseRepetitions: 30,
    exerciseWeight: 45,
    exerciseWeights: [45, 50, 55],
    exerciseRepeatsArray: [12, 10, 8]
  },
  {
    id: 6017,
    activeDayId: 5,
    exerciseName: "Молотки с гантелями",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60171, reps: 12, weight: 12 },
      { id: 60172, reps: 10, weight: 14 },
      { id: 60173, reps: 10, weight: 14 }
    ],
    exerciseRepetitions: 32,
    exerciseWeight: 12,
    exerciseWeights: [12, 14, 14],
    exerciseRepeatsArray: [12, 10, 10]
  },
  {
    id: 6018,
    activeDayId: 5,
    exerciseName: "Разгибание рук на блоке",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60181, reps: 15, weight: 20 },
      { id: 60182, reps: 12, weight: 22 },
      { id: 60183, reps: 10, weight: 25 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 20,
    exerciseWeights: [20, 22, 25],
    exerciseRepeatsArray: [15, 12, 10]
  },

  // === ДЕНЬ 4: НИЗ (ЛЕГКИЙ) ===
  {
    id: 6019,
    activeDayId: 7,
    exerciseName: "Приседания с гантелями",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60191, reps: 15, weight: 20 },
      { id: 60192, reps: 12, weight: 22 },
      { id: 60193, reps: 10, weight: 22 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 20,
    exerciseWeights: [20, 22, 22],
    exerciseRepeatsArray: [15, 12, 10]
  },
  {
    id: 6020,
    activeDayId: 7,
    exerciseName: "Румынская тяга с гантелями",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60201, reps: 12, weight: 25 },
      { id: 60202, reps: 10, weight: 27 },
      { id: 60203, reps: 10, weight: 30 }
    ],
    exerciseRepetitions: 32,
    exerciseWeight: 25,
    exerciseWeights: [25, 27, 30],
    exerciseRepeatsArray: [12, 10, 10]
  },
  {
    id: 6021,
    activeDayId: 7,
    exerciseName: "Гиперэкстензия",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60211, reps: 15, weight: 0 },
      { id: 60212, reps: 12, weight: 0 },
      { id: 60213, reps: 12, weight: 0 }
    ],
    exerciseRepetitions: 39,
    exerciseWeight: 0,
    exerciseWeights: [0, 0, 0],
    exerciseRepeatsArray: [15, 12, 12]
  },
  {
    id: 6022,
    activeDayId: 7,
    exerciseName: "Планка",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60221, reps: 1, weight: 0, duration: 40 },
      { id: 60222, reps: 1, weight: 0, duration: 35 },
      { id: 60223, reps: 1, weight: 0, duration: 30 }
    ],
    exerciseRepetitions: 3,
    exerciseWeight: 0,
    exerciseWeights: [0, 0, 0],
    exerciseRepeatsArray: [40, 35, 30],
    isPlank: true
  },

  // === ДЕНЬ 5: ВЕРХ (КАРДИО/РАЗМИНКА) ===
  {
    id: 6023,
    activeDayId: 5,
    exerciseName: "Отжимания от пола",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60231, reps: 20, weight: 0 },
      { id: 60232, reps: 15, weight: 0 },
      { id: 60233, reps: 12, weight: 0 }
    ],
    exerciseRepetitions: 47,
    exerciseWeight: 0,
    exerciseWeights: [0, 0, 0],
    exerciseRepeatsArray: [20, 15, 12]
  },
  {
    id: 6024,
    activeDayId: 5,
    exerciseName: "Тяга нижнего блока",
    exerciseRepeats: 3,
    exerciseApproaches: [
      { id: 60241, reps: 15, weight: 35 },
      { id: 60242, reps: 12, weight: 40 },
      { id: 60243, reps: 10, weight: 45 }
    ],
    exerciseRepetitions: 37,
    exerciseWeight: 35,
    exerciseWeights: [35, 40, 45],
    exerciseRepeatsArray: [15, 12, 10]
  },
  {
    id: 6025,
    activeDayId: 5,
    exerciseName: "Бег на месте",
    exerciseRepeats: 1,
    exerciseApproaches: [
      { id: 60251, reps: 1, weight: 0, duration: 15 }
    ],
    exerciseRepetitions: 1,
    exerciseWeight: 0,
    exerciseWeights: [0],
    exerciseRepeatsArray: [15],
    isCardio: true,
    cardioDuration: 15
  }
];
