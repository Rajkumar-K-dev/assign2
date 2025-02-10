// 1. ATM Withdrawal System
function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (pin !== enteredPin) return "Incorrect PIN";
    if (amount > balance) return "Insufficient Funds";
    if (amount % 100 !== 0) return "Enter amount in multiples of 100";
    return `Transaction successful. New balance: $${balance - amount}`;
}

// 2. Online Shopping Discount & Free Shipping
function calculateFinalAmount(orderAmount) {
    let discount = orderAmount > 1000 ? 0.2 : orderAmount >= 500 ? 0.1 : 0;
    let discountedPrice = orderAmount * (1 - discount);
    let shipping = discountedPrice > 50 ? 0 : 10;
    return discountedPrice + shipping;
}

// 3. Student Grading System with Extra Credit
function calculateGrade(marks, attendance) {
    if (attendance > 90) marks += 5;
    return marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : marks >= 60 ? "D" : "F";
}

// 4. Smart Traffic Light System
function trafficLightControl(density) {
    return density === "Heavy Traffic" ? 60 : density === "Moderate Traffic" ? 40 : 20;
}

// 5. Movie Ticket Pricing with Time and Age Discount
function calculateTicketPrice(age, showTime) {
    let price = 12;
    if (showTime < 17) price *= 0.8;
    if (age > 60) price *= 0.7;
    if (age < 12) price *= 0.6;
    return price;
}

// 6. Job Application Filter
function isEligibleForJob(age, experience, qualification) {
    return age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree";
}

// 7. E-commerce Coupon Redemption
function applyCoupon(orderAmount, couponCode) {
    if (couponCode === "DISCOUNT10" && orderAmount > 500) return orderAmount * 0.9;
    if (couponCode === "FREESHIP" && orderAmount > 200) return orderAmount;
    return orderAmount;
}

// 8. Fitness Membership Plan
function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (wantsTrainer && wantsDietPlan) return "VIP Plan ($80)";
    if (wantsTrainer) return "Premium Plan ($50)";
    return "Basic Plan ($20)";
}

// 9. Electricity Bill Calculation with Peak Hours
function calculateElectricityBill(units, timeOfDay) {
    let rate = units > 300 ? 3 : units > 100 ? 4 : 5;
    if (timeOfDay >= 20 || timeOfDay < 8) rate *= 1.1;
    return units * rate;
}

// 10. Flight Ticket Booking System
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let price = 300 + (classType === "Business" ? 200 : classType === "First" ? 500 : 0);
    if (luggageWeight > 20) price += Math.ceil((luggageWeight - 20) / 10) * 50;
    if (isStudent) price *= 0.85;
    if (isSenior) price *= 0.9;
    return price;
}
