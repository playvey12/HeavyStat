 const exercisesDataSplit = [

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


module.exports = exercisesDataSplit

