import { NextResponse } from 'next/server'; import { OnboardingAgent } from '@/lib/agents/onboarding-agent';

export async function POST(req: Request) { const body = await req.json(); const agent = new OnboardingAgent();

try { const result = await agent.runWorkflow(body); return NextResponse.json({ status: 'success', data: result }); } catch (error) { return NextResponse.json({ status: 'error', message: error.message }, { status: 500 }); } }