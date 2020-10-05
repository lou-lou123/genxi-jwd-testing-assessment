describe('Buy Beer', () => {
    describe('when 18 or over', () => {
        it('should return true', () => {
            expect(canBuyBeer(18)).toBe(true);
        });
    });

    describe('when 17 or under', () => {
        it('should return false', () => {
            expect(canBuyBeer(17)).toBe(false);
        });
    });

    describe('canGregBuyBeer', () => {
        describe('when greg is 18', () => {
          it('should return "Greg is 18, he can buy beer!"', () => {
            const originalAge = greg.age;
            greg.age = 18
            
            const result = canGregBuyBeer();
      
            expect(result).toBe('Greg is 18, he can buy beer!');
            greg.age = originalAge;
          });
        });
    });
    describe('canGregBuyBeer', () => {
        it('when greg under 18', () => {

            const temporaryVariable = greg.age
            greg.age = 16;

            const result = canGregBuyBeer();

            expect(result).toBe("Greg is 16, he can't buy beer :(");

            greg.age = temporaryVariable;
        });
    });
})