/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface TimedCrowdsaleInterface extends utils.Interface {
  functions: {
    "buyTokens(address)": FunctionFragment;
    "closingTime()": FunctionFragment;
    "hasClosed()": FunctionFragment;
    "isOpen()": FunctionFragment;
    "openingTime()": FunctionFragment;
    "rate()": FunctionFragment;
    "token()": FunctionFragment;
    "wallet()": FunctionFragment;
    "weiRaised()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buyTokens"
      | "closingTime"
      | "hasClosed"
      | "isOpen"
      | "openingTime"
      | "rate"
      | "token"
      | "wallet"
      | "weiRaised"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "buyTokens", values: [string]): string;
  encodeFunctionData(
    functionFragment: "closingTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "hasClosed", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOpen", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "openingTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rate", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(functionFragment: "wallet", values?: undefined): string;
  encodeFunctionData(functionFragment: "weiRaised", values?: undefined): string;

  decodeFunctionResult(functionFragment: "buyTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closingTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasClosed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOpen", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "openingTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wallet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weiRaised", data: BytesLike): Result;

  events: {
    "TimedCrowdsaleExtended(uint256,uint256)": EventFragment;
    "TokensPurchased(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TimedCrowdsaleExtended"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensPurchased"): EventFragment;
}

export interface TimedCrowdsaleExtendedEventObject {
  prevClosingTime: BigNumber;
  newClosingTime: BigNumber;
}
export type TimedCrowdsaleExtendedEvent = TypedEvent<
  [BigNumber, BigNumber],
  TimedCrowdsaleExtendedEventObject
>;

export type TimedCrowdsaleExtendedEventFilter =
  TypedEventFilter<TimedCrowdsaleExtendedEvent>;

export interface TokensPurchasedEventObject {
  purchaser: string;
  beneficiary: string;
  value: BigNumber;
  amount: BigNumber;
}
export type TokensPurchasedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  TokensPurchasedEventObject
>;

export type TokensPurchasedEventFilter = TypedEventFilter<TokensPurchasedEvent>;

export interface TimedCrowdsale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TimedCrowdsaleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    closingTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    hasClosed(overrides?: CallOverrides): Promise<[boolean]>;

    isOpen(overrides?: CallOverrides): Promise<[boolean]>;

    openingTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    wallet(overrides?: CallOverrides): Promise<[string]>;

    weiRaised(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  buyTokens(
    beneficiary: string,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  closingTime(overrides?: CallOverrides): Promise<BigNumber>;

  hasClosed(overrides?: CallOverrides): Promise<boolean>;

  isOpen(overrides?: CallOverrides): Promise<boolean>;

  openingTime(overrides?: CallOverrides): Promise<BigNumber>;

  rate(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  wallet(overrides?: CallOverrides): Promise<string>;

  weiRaised(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    buyTokens(beneficiary: string, overrides?: CallOverrides): Promise<void>;

    closingTime(overrides?: CallOverrides): Promise<BigNumber>;

    hasClosed(overrides?: CallOverrides): Promise<boolean>;

    isOpen(overrides?: CallOverrides): Promise<boolean>;

    openingTime(overrides?: CallOverrides): Promise<BigNumber>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    wallet(overrides?: CallOverrides): Promise<string>;

    weiRaised(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "TimedCrowdsaleExtended(uint256,uint256)"(
      prevClosingTime?: null,
      newClosingTime?: null
    ): TimedCrowdsaleExtendedEventFilter;
    TimedCrowdsaleExtended(
      prevClosingTime?: null,
      newClosingTime?: null
    ): TimedCrowdsaleExtendedEventFilter;

    "TokensPurchased(address,address,uint256,uint256)"(
      purchaser?: string | null,
      beneficiary?: string | null,
      value?: null,
      amount?: null
    ): TokensPurchasedEventFilter;
    TokensPurchased(
      purchaser?: string | null,
      beneficiary?: string | null,
      value?: null,
      amount?: null
    ): TokensPurchasedEventFilter;
  };

  estimateGas: {
    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    closingTime(overrides?: CallOverrides): Promise<BigNumber>;

    hasClosed(overrides?: CallOverrides): Promise<BigNumber>;

    isOpen(overrides?: CallOverrides): Promise<BigNumber>;

    openingTime(overrides?: CallOverrides): Promise<BigNumber>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    wallet(overrides?: CallOverrides): Promise<BigNumber>;

    weiRaised(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    closingTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasClosed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    openingTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weiRaised(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
