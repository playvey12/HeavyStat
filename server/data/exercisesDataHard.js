const exercisesDataHard = [
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



module.exports =  exercisesDataHard 

