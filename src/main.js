/**
 * Функция для расчета выручки
 * @param purchase запись о покупке
 * @param _product карточка товара
 * @returns {number}
 */
function calculateSimpleRevenue(purchase, _product) {
   // @TODO: Расчет выручки от операции

   // 1. discount → десятичное число
   // 2. полная стоимость = sale_price * quantity
   // 3. итог = полная стоимость * (1 - discount)
   // 4. вернуть полученное значение
    return sum = (sale_price * quantity)

}

/**
 * Функция для расчета бонусов
 * @param index порядковый номер в отсортированном массиве
 * @param total общее число продавцов
 * @param seller карточка продавца
 * @returns {number}
 */
function calculateBonusByProfit(index, total, seller) {
    // @TODO: Расчет бонуса от позиции в рейтинге

 if (index === 0) { // Первый по прибыли
        return seller.profit * 0.15;
    } else if (index === 1 || index === 2) { // Второй и третий
        return seller.profit * 0.10;
    } else if (index === total - 1) { // Последний
        return 0;
    } else { // Все остальные
        return seller.profit * 0.05;
    }
}

/**
 * Функция для анализа данных продаж
 * @param data
 * @param options
 * @returns {{revenue, top_products, bonus, name, sales_count, profit, seller_id}[]}
 */




function analyzeSalesData(data, options) {
    // @TODO: Проверка входных данных
    // Проверить что есть sellers, products, purchase_records и они не пустые
    if (!data
    || !Array.isArray(data.sellers) || data.sellers.length === 0
    || !Array.isArray(data.products) || data.products.length === 0
    || !Array.isArray(data.purchase_records) || data.purchase_records.length === 0
) {
    throw new Error('Некорректные входные данные');
} 

    // @TODO: Проверка наличия опций
    // Проверить что переданы calculateRevenue и calculateBonus

    // @TODO: Подготовка промежуточных данных для сбора статистики
    // Для каждого продавца создать объект:
    // {
    //   id,
    //   name,
    //   revenue: 0,
    //   profit: 0,
    //   sales_count: 0,
    //   products_sold: {}
    // }

    // @TODO: Индексация продавцов и товаров для быстрого доступа

    // @TODO: Расчёт выручки и прибыли для каждого продавца
    // Пройтись по purchase_records, достать продавца и товар, вызвать calculateRevenue

    // @TODO: Сортировка продавцов по прибыли

    // @TODO: Назначение премий на основе ранжирования
    // Для каждого продавца вызвать calculateBonus

    // @TODO: Подготовка итоговой коллекции с нужными полями
    // Вернуть массив или объект с результатами
}


