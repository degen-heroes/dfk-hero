/**
 * @fileoverview Tests fetching locked jewel
 */

const testLib = require('../lib/tester.lib');

const { fetchLockedTokensByOwnerChain } = require('../..');
const { NETWORK_IDS } = require('../../src/constants/constants.const');

describe('Fetch Locked xJewel', () => {
  testLib.init();

  // NOTE
  // Performs actual calls

  describe('Happy Path', () => {
    it('Should fetch a won sale auction', async () => {
      const res = await fetchLockedTokensByOwnerChain(
        NETWORK_IDS.HARMONY,
        '0xD5E0e21cfA7b8f46D51A29538F43C0551d162690',
      );

      expect(res).toBeNumber();
    });
  });
});
