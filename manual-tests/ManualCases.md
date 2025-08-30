# Manual Test Cases (Excerpt)

## UI-REG-001 – Register New User (Happy Path)
1. Go to /register
2. Fill mandatory fields, set strong password
3. Accept T&Cs and submit
**Expected**: Verify email banner shown or auto-login; welcome bonus applied if eligible.

## UI-PAY-001 – Deposit via Card Sandbox
1. Navigate Wallet → Deposit → Card
2. Enter sandbox card 4111 1111 1111 1111, any future expiry, CVV 123
3. Confirm
**Expected**: Balance increases immediately; transaction visible.

## UI-BET-001 – Place Single Bet
1. Select Soccer → Match A → Market "Match Winner"
2. Add selection to betslip, stake 10
3. Place bet
**Expected**: Bet accepted; bet ID shown; wallet decreased by stake.
