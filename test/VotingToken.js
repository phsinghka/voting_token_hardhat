const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", () => {
  let Token, token, owner, addr1, addr2;

  beforeEach(async () => {
    Token = await ethers.getContractFactory("VotingToken");
    token = await Token.deploy(1000);
    [owner, addr1, addr2, _] = await ethers.getSigners();
  });
  describe("Deployment", () => {
    it("Should Set the right owner", async () => {
      expect(await token.owner()).to.equal(owner.address);
    });

    it("Should apply the total supply of tokens to the owner", async () => {
      const ownerBalance = await token.balanceOf(owner.address);
      expect(await token.totalSupply()).to.equal(ownerBalance);
    });
    describe("Transactions", () => {
        it("Should be able to transfer token", async()=>{
            
        })

    });
  });
});
