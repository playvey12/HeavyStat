 const exercisesDataUpperLower = [

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


module.exports = exercisesDataUpperLower
