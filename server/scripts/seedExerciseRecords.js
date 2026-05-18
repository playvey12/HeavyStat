const mongoose = require('mongoose')
const ExerciseRecord = require('../models/ExerciseRecord')
const User = require('../models/User')
require('dotenv').config()

// Полный список упражнений из твоего MuscleList
const allExercises = [
    // Грудь (15)
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
    "Пресс в тренажере для груди",
    
    // Трицепс (15)
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
    "Кикбэк с гантелью",
    
    // Бицепс (15)
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
    "Сгибание рук с резиной",
    
    // Спина (15)
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
    "Подъем корпуса в гиперэкстензии",
    
    // Плечи (15)
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
    "Подъем рук в стороны с резиной",
    
    // Пресс (15)
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
    "Боковые наклоны с гантелей",
    
    // Ноги (15)
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
    "Зашагивания на платформу",
    
    // Шея (15)
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
    "Боковые сгибания шеи стоя",
]

// Генерация случайного веса и даты
const getRandomWeight = (baseWeight) => {
    const variance = Math.random() * 20 - 10 // -10 до +10 кг
    return Math.round((baseWeight + variance) * 10) / 10
}

const getRandomDate = (startDate, endDate) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime())
    return new Date(randomTime)
}

const formatDateDisplay = (date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${day}.${month}.${year}`
}

// Для каждого упражнения создаём 5-10 записей
const generateRecords = (userId) => {
    const records = []
    const startDate = new Date(2026, 0, 1)  // 1 января 2025
    const endDate = new Date()              // сегодня
    
    allExercises.forEach(exerciseName => {
        // Определяем базовый вес для упражнения
        let baseWeight = 50
        if (exerciseName.includes("Жим") || exerciseName.includes("Тяга")) baseWeight = 60
        if (exerciseName.includes("Присед")) baseWeight = 80
        if (exerciseName.includes("Становая")) baseWeight = 100
        if (exerciseName.includes("Отжимания")) baseWeight = 0
        if (exerciseName.includes("Подтягивания")) baseWeight = 0
        if (exerciseName.includes("Планка")) baseWeight = 0
        
        // Количество записей для этого упражнения (3-8)
        const recordCount = Math.floor(Math.random() * 6) + 3
        
        let currentWeight = baseWeight
        let currentDate = new Date(startDate)
        
        for (let i = 0; i < recordCount; i++) {
            // Прогресс веса: увеличиваем на 1-5 кг каждую запись
            currentWeight = currentWeight + (Math.random() * 5) + 1
            // Дата: сдвигаем на 5-20 дней вперёд
            const daysToAdd = Math.floor(Math.random() * 15) + 5
            currentDate = new Date(currentDate)
            currentDate.setDate(currentDate.getDate() + daysToAdd)
            
            if (currentDate > endDate) break
            
            records.push({
                userId: userId,
                exerciseName: exerciseName,
                weight: Math.round(currentWeight * 10) / 10,
                dateDisplay: formatDateDisplay(currentDate),
                date: currentDate
            })
        }
    })
    
    return records
}

const seedAllExerciseRecords = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/heavystat')
        
        // Находим пользователя default
        const user = await User.findOne({ telegramId: "default" })
        if (!user) {
            console.error('❌ Пользователь default не найден')
            process.exit(1)
        }
        
        // Очищаем существующие записи
        const deleted = await ExerciseRecord.deleteMany({ userId: user._id })
        console.log(`🗑️ Удалено ${deleted.deletedCount} старых записей`)
        
        // Генерируем тестовые записи
        const testRecords = generateRecords(user._id)
        
        // Сохраняем в базу
        await ExerciseRecord.insertMany(testRecords)
        
        // Группируем по упражнениям для статистики
        const grouped = testRecords.reduce((acc, record) => {
            acc[record.exerciseName] = (acc[record.exerciseName] || 0) + 1
            return acc
        }, {})
        
        console.log(`\n✅ Добавлено ${testRecords.length} тестовых рекордов для пользователя ${user.displayName}`)
        console.log(`\n📊 Статистика по упражнениям:`)
        
        const sorted = Object.entries(grouped).sort((a, b) => b[1] - a[1])
        sorted.slice(0, 20).forEach(([name, count]) => {
            console.log(`   • ${name}: ${count} записей`)
        })
        
        process.exit()
    } catch (error) {
        console.error('❌ Ошибка:', error)
        process.exit(1)
    }
}

seedAllExerciseRecords()