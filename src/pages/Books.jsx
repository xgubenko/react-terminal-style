import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import TerminalInput from "../components/TerminalInput";
import Help from "../components/Help";
import ToPage from "../components/ToPage";

const Books = () => {
  const [help, setHelp] = useState(false);
  return (
    <>
      <div className='noise'></div>
      <div className='overlay'></div>
      <div className='terminal'>
        <Header />
        <h1>Recommended Books</h1>
        <p className='output'>
          <i>Grokking Algorithms</i> by Aditya Y. Bhargava
          <br></br>
          Fully illustrated, friendly guide that teaches you how to apply common
          algorithms to the practical problems you face every day as a
          programmer.
          <br></br>
          <i>Java: The Complete Reference</i> by Herbert Schildt
          <br></br>
          It is a well-structured source on Java programming with examples from
          the real world programming. It covers the Java 17 APIs, and clearly
          explains the basic concepts and beyond that.
          <br></br>
          <i>Java Concurrency in Practice</i> by David Holmes, Joshua Bloch,
          Doug Lea, Brian Goetz, Tim Peierls, Joseph Bowbeer
          <br></br>
          It is the bible of concurrency and concurrent programming for Java
          developers and a must-read for anyone serious about parallel
          programming.
          <br></br>
          <i>Head First Design Patterns</i> by Eric Freeman, Elisabeth Robson,
          Bert Bates, Kathy Sierra
          <br></br>
          Friendly book that explains tested patterns used by developers to
          create functional, elegant, reusable, and flexible software.
          <br></br>
          <i>Kafka: The Definitive Guide</i> by Neha Narkhede, Gwen Shapira, and
          Todd Palino
          <br></br>
          This book explains how Kafka works, internal architecture, what it's
          used for, and how to take full advantage of Kafka stream processing
          technology.
          <br></br>
          <i>Designing Data-Intensive Applications</i> by Martin Kleppmann
          <br></br>
          This book compares the fundamental ideas behind a broad variety of
          technologies for data processing and storing.
          <br></br>
        </p>

        <ToPage text='main' />
        {help && <Help />}
        <TerminalInput setHelp={setHelp} />
      </div>
    </>
  );
};

export default Books;
