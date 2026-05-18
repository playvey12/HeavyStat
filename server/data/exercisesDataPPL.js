
 const exercisesDataPushPullLegs = [
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

module.exports = exercisesDataPushPullLegs
