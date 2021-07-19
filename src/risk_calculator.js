
window.numberWithCommas = function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

window.dataTypeBarToText = function dataTypeBarToText(x) {
  if (x == "1") {
    return "HIPAA Protected Health Information"
  } else if (x == "2") {
    return "GDPR Personally Identifiable Information"
  } else if (x == "3") {
    return "CCPA Personally Identifiable Information"
  }  else if (x == "4") {
    return "NAIC Protected Information"
  } else if (x == "5") {
    return "Double Extortion Ransomware"
  } else if (x == "6") {
    return "Consumers' Financial Protected Data"
  } else if (x == "7") {
    return "Business Critical Infrastructure"
  } else if (x == "8") {
    return "Trade Secrets"
  } else if (x == "9") {
    return "National Security Protected Information"
  }
}

var totalRecordsDisplay = null
var totalRecordsBar = null
var dataTypeBar = null
var dataTypeDisplay = null
var estimatedCostDisplay = null
var estimatedFinesDisplay = null
var estimatedDaysDisplay = null

// Constants
var MaxDataTotalLossRecords = 1000000
var AvgCostOfDataBreachPerRecord = 150

var AvgDaysOfDataBreachRecovery = 279
var ShortestBreach = 14
var longestBreach = 558

// GDPR
var largestGDPRFines = 55000000
var lowestGDPRFine = 5000000

var CCPAPerRecord = 2500

var NAICFineTotals = 50000

var doubleExtortion = 50000000

var ConsumerFinancialProtectedDataAvgFine = 5633802

var BusinessCriticalInfraFine = 0

var TradeSecretsAvgFine = 0
var TradeSecretsAvgLoss = 300000000000

window.getFines = function getFines(dataType, numRecords) {
  fineCost = 0

  // HIPAA PHI
  if (dataType == 1) {
    // HIPAA Enforcement Fine
    if (numRecords >= 10000 && numRecords <= 100000) {
      fineCost = fineCost + (26 * numRecords)
    } else if (numRecords >= 100000) {
      fineCost = fineCost + 2600000
    }
  }

  // GDPR
  if (dataType == 2) {
    fineCost = numRecords * (largestGDPRFines / MaxDataTotalLossRecords)
  }

  // CCPA
  if (dataType == 3) {
    // This is just insane, so take 1/4 of the max
    fineCost = numRecords * CCPAPerRecord / 4
  }

  // NAIC
  if (dataType == 4) {
    if (numRecords <= 50000) {
      fineCost = numRecords * (NAICFineTotals / 50000)
    } else {
      fineCost = NAICFineTotals
    }
  }

  // Double Extortion
  if (dataType == 5) {
    fineCost = 0
  }

  // Consumers' Financial Protected Data
  if (dataType == 6) {
    fineCost = numRecords * (ConsumerFinancialProtectedDataAvgFine / MaxDataTotalLossRecords)
  }

  return Math.floor(fineCost)
}

window.getEstimatedCost = function getEstimatedCost(dataType, numRecords) {
  totalCost = getFines(dataType, numRecords)
  totalCost = totalCost + (AvgCostOfDataBreachPerRecord * numRecords)
  return totalCost
}

window.getEstimatedDays = function getEstimatedDays(dataType, numRecords) {
  // 1-50,000 we setp forward by .0053 days per record
  if (numRecords <= 50000) {
    return 14 + Math.floor(numRecords * .0053)
  }

  // 50,000 - 1,000,000, we step forward by
  return 279 + Math.floor(numRecords * .000279)
}

window.showVal = function showVal() {
  if (totalRecordsDisplay == null) {
    totalRecordsBar = document.getElementById("total_records_bar");
    totalRecordsDisplay = document.getElementById("total_records_display");
    dataTypeBar = document.getElementById("data_type_bar");
    dataTypeDisplay = document.getElementById("data_type_display")
    estimatedCostDisplay = document.getElementById("estimated_cost_display")
    estimatedFinesDisplay = document.getElementById("estimated_fines_display")
    estimatedDaysDisplay = document.getElementById("estimated_days_display")
  }

  // Update input displays
  dataTypeDisplay.innerHTML = dataTypeBarToText(dataTypeBar.value)
  totalRecordsDisplay.innerHTML = numberWithCommas(totalRecordsBar.value)

  // Trade Secrets are a special case.
  if (dataTypeBar.value == "8") {

    estimatedCostDisplay.innerHTML = "Your Company"
    estimatedFinesDisplay.innerHTML = "$" + numberWithCommas(getFines(dataTypeBar.value, totalRecordsBar.value))
    estimatedDaysDisplay.innerHTML = "Not Recoverable"
    return
  }

  // Compute Costs
  estimatedCostDisplay.innerHTML = "$" + numberWithCommas(getEstimatedCost(dataTypeBar.value, totalRecordsBar.value))

    // Compute Fines
  estimatedFinesDisplay.innerHTML = "$" + numberWithCommas(getFines(dataTypeBar.value, totalRecordsBar.value))

    // Compute Days
  estimatedDaysDisplay.innerHTML = getEstimatedDays(dataTypeBar.value, totalRecordsBar.value) + " Days"



}