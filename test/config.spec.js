import getConfig from '../app/config'

describe('getConfig', () => {
  it('should have description', async () => {
    const config = await getConfig()
    expect(config.roms.length).toBe(9)
    expect(config.roms[1].rating).toBe(5)
  });
});
