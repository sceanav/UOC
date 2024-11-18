/*************  ✨ Codeium Command ⭐  *************/
async function computePI(digits) {
  if (digits <= 0) {
    return '0'
  }

  const DIGITS = new BigNumber(digits)
  const N = DIGITS.dividedToIntegerBy(DIGITS_PER_TERM).plus(1)
  const PREC = DIGITS.multipliedBy(Math.log2(10))

  BigNumber.config({
    DECIMAL_PLACES: Math.ceil(PREC.toNumber()),
    POW_PRECISION: Math.ceil(PREC.toNumber()),
  })

  const PQT = await computePQT(new BigNumber(0), N)
  let PI = D.multipliedBy(E.sqrt()).multipliedBy(PQT.Q)
  PI = PI.dividedBy(A.multipliedBy(PQT.Q).plus(PQT.T))

  return PI.toFixed(digits)
}
/******  3492e035-0342-482d-a161-37a0a6e1973f  *******/

console.log (computePI(1000));