'use client';

import React, { useState } from 'react';
import ChatHeader from './chat-header';
import { Message } from '@/lib/types';
import { Suspense } from 'react';
import WelcomeSection from './welcome-section';
import ChatBottomBar from './chat-bottom-bar';
import ChatSection from './chat-section';

type Props = {};

const ChatPage = (props: Props) => {
	const [messages, setMessages] = useState<
		Message[]
	>([]);

	const updateMessages = (
		newMessage: Message
	) => {
		setMessages((prevMessages) => [
			...prevMessages,
			newMessage
		]);
	};

	return (
		<div className="flex flex-col w-full">
			<ChatHeader />
			<main className="flex-1 overflow-y-auto">
				<ChatSection messages={messages} />

				{messages.length === 0 && (
					<Suspense fallback={<p>Loading....</p>}>
						<WelcomeSection />
					</Suspense>
				)}
			</main>
			<ChatBottomBar onSend={updateMessages} />
		</div>
	);
};

export default ChatPage;
