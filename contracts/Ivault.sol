// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.9;


interface Ivault {

    function createGrant(address _beneficiary, uint _time) external payable returns(uint );

    function withdraw(uint _id) external;
    function RevertGrant(uint _id) external ;

    function getBalance() external view returns(uint256 bal);
    // function returnBeneficiaryInfo(uint _id) external view returns(BeneficiaryProperties memory BP );
        
}